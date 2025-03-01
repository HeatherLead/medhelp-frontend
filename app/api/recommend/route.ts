import { NextRequest , NextResponse } from "next/server";
import axios from "axios";
const BACKEND_URL = process.env.BACKEND_URL!;
interface Medicine {
  medicine_name: string;
    medicine_composition: string;
    medicine_use: string;
}

export async function POST(request: NextRequest) {

    const { medicine_name, medicine_composition, medicine_use } : Medicine = await request.json();
    
    const response = await axios.post(`${BACKEND_URL}/recommend`, {
        medicine_name,
        medicine_composition,
        medicine_use
    });
  
  return NextResponse.json(response.data);
}