import { NextRequest , NextResponse } from "next/server";
import axios from "axios";
const BACKEND_URL = process.env.BACKEND_URL!;
interface reviewDetails {
    excellent_review: number;
    average_review: number;
    poor_review: number;
}

export async function POST(request: NextRequest) {

    const { excellent_review , average_review, poor_review } : reviewDetails = await request.json();
    
    const response = await axios.post(`${BACKEND_URL}/reviewAnalysis`, {
        excellent_review,
        average_review,
        poor_review
    });
  
  return NextResponse.json(response.data);
}