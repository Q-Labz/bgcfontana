import { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const FundraisingEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      id: 1,
      title: '⛳ Driving for Great Futures – TOPGolf Fundraiser',
      date: 'Thursday, June 19, 2025',
      location: 'TOPGolf Ontario',
      description: 'A fun and energetic evening of golf, networking, and giving back to local youth programs.'
    },
    {
      id: 2,
      title: '⛳ Boys & Girls Club Golf Classic',
      date: 'Monday, August 25, 2025',
      location: 'Sierra Lakes Golf Club',
      description: 'Our tournament brings together business and civic leaders for a day of golf and philanthropy.'
    },
    {
      id: 3,
      title: '🎉 The Mayor\'s Great Futures Gala',
      date: 'Saturday, October 25, 2025',
      location: 'Spaggi\'s Event Center, Fontana',
      description: 'A memorable evening of entertainment and inspiring stories of youth success.'
    }
  ];

  const sponsorships = [
    {
      name: 'Platinum Sponsor',
      price: '$30,000',
      benefits: [
        'Hole-in-One Sponsorship at the Driving for Great Futures TOPGolf Tournament (4 bays)',
        'Title Sponsorship at the Golf Classic (4 foursomes)',
        'Diamond Sponsorship at the Gala (10 tickets)',
        'Name and logo recognition on all promotional materials for all events'
      ]
    },
    {
      name: 'Gold Sponsor',
      price: '$20,000',
      benefits: [
        'Eagle Sponsorship at the TOPGolf Tournament (3 bays)',
        'Corporate Sponsorship at the Golf Classic (3 foursomes)',
        'Emerald Sponsorship at the Gala (8 tickets)',
        'Name and logo recognition on all promotional materials'
      ]
    },
    {
      name: 'Silver Sponsor',
      price: '$10,000',
      benefits: [
        'Birdie Sponsorship at the TOPGolf Tournament (2 bays)',
        'Executive Sponsorship at the Golf Classic (2 foursomes)',
        'Ruby Sponsorship at the Gala (6 tickets)',
        'Name and logo recognition on all promotional materials'
      ]
    },
    {
      name: 'Bronze Sponsor',
      price: '$5,000',
      benefits: [
        'Par Sponsorship at the TOPGolf Tournament (1 bay)',
        'Major Sponsorship at the Golf Classic (1 foursome)',
        'Opal Sponsorship at the Gala (4 tickets)',
        'Name and logo recognition on all promotional materials'
      ]
    },
    {
      name: 'President\'s Club',
      price: '$3,000',
      benefits: [
        'Team Sponsorship at the TOPGolf Tournament (1 bay)',
        'Team Sponsorship at the Golf Classic (1 foursome)',
        'Sapphire Sponsorship at the Gala (2 tickets)',
        'Name and logo recognition on all promotional materials'
      ]
    }
  ];

  return (
    <Container className="py-5">
      <Helmet>
        <title>2025 Fundraising Events | Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us for our 2025 fundraising events and support the Boys & Girls Club of Fontana. Sponsorship opportunities available." />
      </Helmet>

      <h1 className="text-center mb-5">2025 Fundraising Events</h1>
      
      <section className="mb-5">
        <h2 className="mb-4">Upcoming Events</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {events.map((event) => (
            <Col key={event.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="h5">{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                  <Card.Text className="text-muted">{event.location}</Card.Text>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Sponsorship Opportunities</h2>
        <p className="lead mb-4">
          Maximize your promotional benefits by signing up early!<br />
          <small className="text-muted">All sponsorships must be received no later than June 15, 2025, to receive full promotional opportunities for TOPGolf.</small>
        </p>
        
        <Row className="g-4">
          {sponsorships.map((sponsor, index) => (
            <Col key={index} xs={12}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Header className="bg-primary text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="h5 mb-0">{sponsor.name}</h3>
                    <Badge bg="light" text="primary" className="fs-6">{sponsor.price}</Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    {sponsor.benefits.map((benefit, i) => (
                      <ListGroup.Item key={i} className="border-0 px-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {benefit}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <button className="btn btn-outline-primary mt-3">Become a {sponsor.name}</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default FundraisingEvents;
