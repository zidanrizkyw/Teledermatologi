import React from 'react'
import { Container, Row, Col, Table, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function ContentDetailPatientAd() {
    return (
        <div className='WrapperContent'>
            <Container className='bg-light h-100 mt-3 rounded-4'>
                <Row>
                    <Col className='myscrollbar'>
                        <Col className='mt-3 mb-3 d-flex'>
                            <div className='infopatient1'>
                                <h5>Name</h5>
                                <h5>Gender</h5>
                                <h5>No. Telp</h5>
                                <h5>Email</h5>
                            </div>
                            <div className='infopatient1'>
                                <h5>:</h5>
                                <h5>:</h5>
                                <h5>:</h5>
                                <h5>:</h5>
                            </div>
                            <div className='infopatient2'>
                                <h5>Marky</h5>
                                <h5>Laki-Laki</h5>
                                <h5>0845676543</h5>
                                <h5>Marky@gmail.com</h5>
                            </div>
                        </Col>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Percobaan</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='details'><Link to="https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial%203/meme%2010-20230523181152.webp?tr=w-800" target="_blank">Link</Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ContentDetailPatientAd