import React from 'react';
import { Card, Button, Row, Col, Form, Container } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { IoTrendingUpOutline, IoTrendingDown } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import StarIcon from '@mui/icons-material/Star';
import LensIcon from '@mui/icons-material/Lens';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import Divider from '@mui/material/Divider';
import { LineChart } from '@mui/x-charts/LineChart';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';




function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    {
        name: " Camera Mi 360",
        amount: 432,
        unitPrice: 120,
        revenue: 51840,
        rating: 4.81
    },
    {
        name: "Massage Gun",
        amount: 120,
        unitPrice: 112,
        revenue: 25440,
        rating: 3.44
    },
    {
        name: "Vaccum-Mop 2 Pro",
        amount: 221,
        unitPrice: 320,
        revenue: 15123,
        rating: 3.22
    },
    {
        name: "Vaccum-Mop 2",
        amount: 223,
        unitPrice: 234,
        revenue: 32812,
        rating: 3.00
    },

];

const Websale = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const Offlineselling = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const Dashboard = () => {
    const [seriesNb, setSeriesNb] = React.useState(2);
    const [itemNb, setItemNb] = React.useState(5);
    const [skipAnimation, setSkipAnimation] = React.useState(false);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];


    const highlightScope = {
        highlighted: 'series',
        faded: 'global',
    };

    const seriesData = [
        {
            label: 'This Year',
            data: [
                5000, 10000, 20000, 32000, 12000, 13000
            ],
        },
        {
            label: 'Last Year',
            data: [
                6000, 2000, 40000, 21000, 9200, 8700
            ],
        },

    ].map((s) => ({ ...s, highlightScope }));


    return (
        <div>
            {/* <Card style={{ width: '800px', height: '800px' }}> */}
            <Row>
                <Card style={{ width: '850px', height: '800px' }}>
                    <Col>

                        <div>
                            {/* Add the Dashboard title */}
                            <Row>
                                <Col style={{ justifyContent: "space-between" }}>
                                    <h2 style={{ display: 'inline-block' }}>Dashboard</h2> {/* Add the Dashboard title */}
                                    <div style={{ display: 'inline-block', marginLeft: '10px' }}> {/* Wrapper div with flexbox styling */}
                                        <span style={{ marginRight: '5px' }}>Compare to:</span>
                                        <Form.Select aria-label="Default select example" style={{ borderRadius: '20px', width: '115px', height: '35px' }}>
                                            <option>Last Year</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </Form.Select>
                                    </div>
                                </Col>
                            </Row>

                            <Card style={{ width: '15rem', margin: '5px', border: '1px solid #dee2e6', borderRadius: '10px', display: 'inline-block' }}>
                                <Card.Body>
                                    <Card.Title>Purchases</Card.Title>
                                    <div style={{ display: 'flex' }}>
                                        <span>4,294</span>
                                        <Button variant="primary" style={{ borderRadius: '20px', backgroundColor: 'lightgreen', height: '30px' }}>
                                            +32%<MovingIcon style={{ marginLeft: '5px', color: 'green' }} />
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem', margin: '5px', border: '1px solid #dee2e6', borderRadius: '10px', display: 'inline-block' }}>
                                <Card.Body>
                                    <Card.Title>Revenue</Card.Title>
                                    <div style={{ display: 'flex' }}>
                                        <span>2,018</span>
                                        <Button variant="primary" style={{ borderRadius: '20px', backgroundColor: 'lightgreen', height: '30px' }}>
                                            -49%<MovingIcon style={{ marginLeft: '5px', color: 'green' }} />
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem', margin: '5px', border: '1px solid #dee2e6', borderRadius: '10px', display: 'inline-block' }}>
                                <Card.Body>
                                    <Card.Title>Refunds</Card.Title>
                                    <div style={{ display: 'flex' }}>
                                        <span>2,018</span>
                                        <Button variant="primary" style={{ borderRadius: '20px', backgroundColor: 'lightpink', height: '30px' }}>
                                            -7%<IoTrendingDown style={{ marginLeft: '5px', color: 'black', fontSize: '24px' }} />

                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        {/*Second Componenet*/}
                        <div>
                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3>Comparison</h3>
                                    <Form.Select aria-label="Default select example" style={{ borderRadius: '20px', width: '110px', height: '35px', marginTop: '30px' }}>
                                        <option>6 months</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Container sx={{ width: '100%' }}>
                                <BarChart
                                    height={300}
                                    series={seriesData
                                        .slice(0, seriesNb)
                                        .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
                                    skipAnimation={skipAnimation}
                                    xLabels={months}
                                />
                            </Container>
                        </div>

                        {/*sixth component*/}
                        <div>
                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3>Top Products</h3>
                                    <Button style={{ borderRadius: '20px', width: '115px', height: '30px', marginTop: '10px' }}>
                                        Full results</Button>
                                </Col>
                            </Row>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell align="right">Sold Amount</TableCell>
                                            <TableCell align="right">Unit Price</TableCell>
                                            <TableCell align="right">Revenue</TableCell>
                                            <TableCell align="right">Rating</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {index === 0 ? (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <CameraAltIcon /> {/* Replace CameraIcon with your camera icon component */}
                                                            <span style={{ marginLeft: '10px' }}>Camera Mi 360</span>
                                                        </div>
                                                    ) : index === 1 ? (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <FormatPaintIcon /> {/* Using LensIcon */}
                                                            <span style={{ marginLeft: '10px' }}>Massage Gun</span>
                                                        </div>
                                                    ) : index === 2 ? (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <LensIcon /> {/* Using LensIcon */}
                                                            <span style={{ marginLeft: '10px' }}>Vaccum-Mop 2 Pro</span>
                                                        </div>
                                                    ) : index === 3 ? (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <PanoramaFishEyeIcon /> {/* Using LensIcon */}
                                                            <span style={{ marginLeft: '10px' }}>Vaccum-Mop 2</span>
                                                        </div>
                                                    ) : (
                                                        row.name
                                                    )}
                                                </TableCell>
                                                <TableCell align="right">{row.amount}</TableCell>
                                                <TableCell align="right">${row.unitPrice}</TableCell>
                                                <TableCell align="right">${row.revenue}</TableCell>
                                                <TableCell align="right">
                                                    <div style={{ color: 'orange' }}>
                                                        <StarIcon sx={{ fontSize: 'small' }} /> {row.rating}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        </div>
                    </Col>
                </Card>

                {/*Third Component*/}
                <Col>
                    <div>
                        <Container fluid>
                            <Row>
                                <Col className="text-end">
                                    <Card style={{
                                        width: '15rem', Height: '45rem',
                                        position: 'absolute', top: '10px', right: '10px',
                                        border: '1px solid #dee2e6',
                                        borderRadius: '10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        <p style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center', marginBottom: '0' }}>78</p>
                                        <p>of 100 points</p>
                                        <Divider variant="middle" />
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: 'bold' }}>You're good</Card.Title>
                                            <Card.Text>
                                                Your sales performance score is better than 80% other users
                                            </Card.Text>

                                            <Button variant="primary" style={{ borderRadius: '10px' }}>Improve your score</Button>
                                        </Card.Body>
                                    </Card>
                                    {/*Fourth componenet*/}
                                    <Card style={{
                                        width: '25rem', Height: '55rem',
                                        position: 'absolute', bottom: '-50px', right: '10px',
                                        border: '1px solid #dee2e6',
                                        borderRadius: '10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>Customers by device</Card.Title>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                series={[
                                                    { data: Websale, label: 'Web sale' },
                                                    { data: Offlineselling, label: 'Offline selling' },
                                                ]}
                                                xAxis={[{ scaleType: 'point', data: xLabels }]}
                                                yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                                                rightAxis="rightAxisId"
                                            />
                                        </Card.Body>
                                    </Card>
                                    <Card style={{
                                        width: '15rem', Height: '45rem',
                                        position: 'absolute', bottom: '-250px', right: '10px',
                                        border: '1px solid #dee2e6',
                                        borderRadius: '10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>

                                        <Card.Body>
                                            <Card.Title>Community feedback</Card.Title>
                                            <Card.Text style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                Mostly Positive
                                            </Card.Text>
                                            <ProgressBar>
                                                <ProgressBar striped variant="warning" now={20} key={1} />
                                                <ProgressBar variant="danger" now={10} key={2} />
                                                <ProgressBar striped variant="success" now={100} key={3} />
                                            </ProgressBar>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '100%' }}>
                                                <span>Negative</span>
                                                <span>Neutral</span>
                                                <span>Positive</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                <span>12</span>
                                                <span>34</span>
                                                <span>134</span>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            {/* Add your other components below */}
                        </Container>
                    </div>
                </Col>




            </Row>
            {/* // </Card> */}

        </div>


    )
}

export default Dashboard;
