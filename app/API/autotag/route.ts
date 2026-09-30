import {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  AutotagPDFJob,
  AutotagPDFResult,
  SDKError,
  ServiceUsageError,
  ServiceApiError
} from "@adobe/pdfservices-node-sdk";
import fs from "fs";

export async function POST(request: Request) {
  const body = await request.json();

  const caminho: string = body.caminho;

  let readStream;

  try {
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!
    });

    const pdfService = new PDFServices({ credentials });

    readStream = fs.createReadStream(caminho);
    const inputAsset = await pdfService.upload({
      readStream,
      mimeType: MimeType.PDF
    });

    const job = new AutotagPDFJob({ inputAsset });

    const pollingURL = await pdfService.submit({ job });
    const pdfServicesResponse = await pdfService.getJobResult({
      pollingURL,
      resultType: AutotagPDFResult
    });

    const resultAsset = pdfServicesResponse.result?.taggedPDF;
    const streamAsset = await pdfService.getContent({ asset: resultAsset! });

    const outputStream = fs.createWriteStream('arquivoPDF.pdf');
    streamAsset.readStream.pipe(outputStream);
  }
  catch (err) {
    if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {
      console.log("Exception encountered while executing operation", err);
    } else {
      console.log("Exception encountered while executing operation", err);
    }
  }
  finally {
    readStream?.destroy();
  }
}
