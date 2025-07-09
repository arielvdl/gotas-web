import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    feature: "Tipo",
    points: "Banco de dados",
    gotas: "NFT",
  },
  {
    feature: "Custódia",
    points: "Empresa",
    gotas: "Usuário",
  },
  {
    feature: "Transferível livremente",
    points: "Não",
    gotas: "Sim",
  },
  {
    feature: "Pode ser vendido",
    points: "Não",
    gotas: "Sim",
  },
  {
    feature: "Personalização",
    points: "Nenhuma",
    gotas: "Imagem/Vídeo",
  },
  {
    feature: "Integração facilitada",
    points: "Não",
    gotas: "Sim",
  },
  {
    feature: "Royalties perpétuos",
    points: "Não",
    gotas: "Sim",
  },
];

export function ComparisonTable() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Table className="bg-transparent border-collapse">
        <TableHeader>
          <TableRow className="border-b border-gray-600 hover:bg-transparent">
            <TableHead className="text-left text-gray-400 font-medium text-base w-1/3 py-6"></TableHead>
            <TableHead className="text-center text-white font-bold text-xl py-6">
              PONTOS
            </TableHead>
            <TableHead className="text-center text-cyan-400 font-bold text-xl py-6">
              GOTAS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map((item) => (
            <TableRow 
              key={item.feature} 
              className="border-b border-gray-600 hover:bg-gray-800/30 transition-colors"
            >
              <TableCell className="text-gray-400 font-medium text-base py-6">
                {item.feature}
              </TableCell>
              <TableCell className="text-center text-white font-bold text-lg py-6">
                {item.points}
              </TableCell>
              <TableCell className="text-center text-cyan-400 font-bold text-lg py-6">
                {item.gotas}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 