// This file is for Vercel Serverless Functions if needed in the future
// Currently the build is handled by the build command in vercel.json

export default function handler(req: any, res: any) {
  res
    .status(200)
    .json({
      message: "Build endpoint is not used. Static files are served directly.",
    });
}
