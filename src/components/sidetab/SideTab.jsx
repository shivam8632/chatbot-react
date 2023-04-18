import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faImage } from '@fortawesome/free-solid-svg-icons';

import Copy from '../copy/Copy';
import ImageTab from '../copy/ImageTab';

function SideTab() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12} className='tabs-head px-lg-4'>
          <Nav variant="pills" className="flex-row">
            <Nav.Item>
              <Nav.Link className='d-flex align-items-center' eventKey="first">
                <FontAwesomeIcon icon={faCopy} style={{ color: "#4a5568", width: "12px", height: "12px", marginRight: 8 }} />Copy</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className='d-flex align-items-center' eventKey="second">
                <FontAwesomeIcon icon={faImage} style={{ color: "#4a5568", width: "12px", height: "12px", marginRight: 8 }} />Image</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12} className=' pt-4 tabs-content px-lg-4'>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Copy />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ImageTab />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default SideTab;