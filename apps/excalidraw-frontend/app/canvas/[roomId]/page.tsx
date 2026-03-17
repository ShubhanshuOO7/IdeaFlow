

import { RoomCanvas } from "../../../components/RoomCanvas";


type Params = Promise<{ roomId: string }>;

export default async function CanvasPage({ params }: { params: Params }) {
  const resolvedParams = await params;           
  const { roomId } = resolvedParams;             


  return <RoomCanvas roomId={roomId} />;
}