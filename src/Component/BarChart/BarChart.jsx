import {
  BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from 'recharts';
const BarChart = () => {
    const bookPagesData = [
  { name: "Alchemist", pages: 208 },
  { name: "Atomic Habits", pages: 320 },
  { name: "Mockingbird", pages: 336 },
  { name: "Sapiens", pages: 443 },
  { name: "Hobbit", pages: 310 },
  { name: "Psychology of Money", pages: 256 },
  { name: "Deep Work", pages: 304 },
  { name: "Dune", pages: 412 },
  { name: "Educated", pages: 352 }
];
    return (
        <div>
            <BChart width={500} height={400} data={bookPagesData}>
                <Bar></Bar>
            </BChart>
        </div>
    );
};

export default BarChart;