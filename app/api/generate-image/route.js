import { NextResponse } from "next/server";
import axios from "axios";
const stableDiffusionKey = process.env.STABLE_DIFFUSION_KEY
export const POST = async (req) => {
  const body = await req.json();
  const data = {
    key: stableDiffusionKey,
    prompt:body,
    negative_prompt: null,
    width: "512",
    height: "512",
    samples: "1",
    num_inference_steps: "20",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    guidance_scale: 7.5,
    multi_lingual: "no",
    panorama: "no",
    self_attention: "no",
    upscale: "no",
    embeddings_model: "embeddings_model_id",
    webhook: null,
    track_id: null,
  };

  try {
    const response = await axios.post(
      "https://stablediffusionapi.com/api/v3/text2img",
      data
    )
    console.log(response.data);
    return NextResponse.json(response.data)
  } catch (error) {
    console.error(error);
  }

  
};
