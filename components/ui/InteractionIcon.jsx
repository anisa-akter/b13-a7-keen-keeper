import { MessageSquareMore, Phone, Video } from "lucide-react";

export default function InteractionIcon({ type, size = 18 }) {
  if (type === "call") {
    return <Phone size={size} />;
  }

  if (type === "video") {
    return <Video size={size} />;
  }

  return <MessageSquareMore size={size} />;
}
