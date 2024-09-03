import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "#112230",
    paymentStatus: "Доставлен",
    totalAmount: "$250.00",
    date: "09/11/23",
    quantity: "3",
    articul: "121212",
  },
  {
    invoice: "#112230",
    paymentStatus: "Доставлен",
    totalAmount: "$250.00",
    date: "09/11/23",
    quantity: "3",
    articul: "121212",
  },
  {
    invoice: "#112230",
    paymentStatus: "Доставлен",
    totalAmount: "$250.00",
    date: "09/11/23",
    quantity: "3",
    articul: "121212",
  },
  {
    invoice: "#112230",
    paymentStatus: "Доставлен",
    totalAmount: "$250.00",
    date: "09/11/23",
    quantity: "3",
    articul: "121212",
  },
  {
    invoice: "#112230",
    paymentStatus: "Доставлен",
    totalAmount: "$250.00",
    date: "09/11/23",
    quantity: "3",
    articul: "121212",
  },
  {
    invoice: "#112230",
    paymentStatus: "Доставлен",
    totalAmount: "$250.00",
    date: "09/11/23",
    quantity: "3",
    articul: "121212",
  },
];

export function ProfileTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-right">Номер заказа</TableHead>
            <TableHead className="text-left">Дата</TableHead>
            <TableHead className="text-left">Количество</TableHead>
            <TableHead className="text-left">Итог</TableHead>
            <TableHead className="text-left">Артикул</TableHead>
            <TableHead className="text-left">Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>

              <TableCell>{invoice.articul}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-left">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
