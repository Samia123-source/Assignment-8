import { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { getStoredReadingList } from '../Utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;
    const color = colors[index % colors.length];
    return (
        <path
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
        />
    );
};

const CustomColorLabel = (props) => {
    const { x, y, width, value, index } = props;
    const color = colors[index % colors.length];
    return (
        <text
            x={x + width / 2}
            y={y - 6}
            fill={color}
            textAnchor="middle"
            fontSize={12}
            fontWeight="bold"
        >
            {value}
        </text>
    );
};

const PagesToRead = () => {
    const [books, setBooks] = useState([]);
const [readingList, setReadingList] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                const storedReadingList = getStoredReadingList();
                const listOfReading = [];
                for (const id of storedReadingList) {
                    const book = data.find(book => book.Id === parseInt(id));
                    if (book) listOfReading.push(book);
                }
                setReadingList(listOfReading);
            });
    }, []);

    const chartData = readingList.map(book => ({
        name: book.Book_Name,
        pages: book.Number_Of_Pages,
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 0, bottom: 80 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip
                    formatter={(value) => [`${value} pages`, 'Pages']}
                />
                <XAxis
                    dataKey="name"
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                    tick={{ fontSize: 11 }}
                />
                <YAxis width={50} />
                <Bar dataKey="pages" shape={<TriangleBar />}>
                    <LabelList content={<CustomColorLabel />} position="top" />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default PagesToRead;
