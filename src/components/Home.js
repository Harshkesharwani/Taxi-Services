import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, Chip, Accordion, AccordionSummary, AccordionDetails, ButtonBase } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/system';
import WebsiteIcon from '@mui/icons-material/Public';
import TaxiIcon from '@mui/icons-material/LocalTaxi';
import PaymentIcon from '@mui/icons-material/Payment';

import car from '../assets/car.png';
import bgImage from '../assets/bg1.jpg';
import playstoreImage from "../assets/ps.png"
import iosImage from "../assets/ios.png"
// import TaxiImage from '';

const images = [
  { src: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/i20/9471/1697696007962/front-left-side-47.jpg', title: 'Hatchback', type: 'Hatchback' },
  { src: 'https://ackodrive-assets.s3.amazonaws.com/media/test_bIZkFQB.png', title: 'SUV', type: 'SUV' },
  { src: 'https://acko-cms.ackoassets.com/Best_Sedan_Cars_in_India_7f9316e360.png', title: 'Sedan', type: 'Sedan' },
  { src: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/vw-golf-top-10.jpg', title: 'Hatchback', type: 'Hatchback' },
  { src: 'https://financialexpresswpcontent.s3.amazonaws.com/uploads/2019/11/2020-kia-k5-Optima-660x440.jpg', title: 'Sedan', type: 'Sedan' },
  { src: 'https://ackodrive-assets.s3.amazonaws.com/media/test_rbRsDZH.png', title: 'SUV', type: 'SUV' },
];

const FilledIcon = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#FFC700',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#ffeb3b',
  },
});


const Home = () => {
  const [category, setCategory] = useState('All');
  const [index, setIndex] = useState(-1);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 4));

  const filteredImages = category === 'All' ? visibleImages : visibleImages.filter(img => img.type === category);

  const handleLoadMore = () => {
    setVisibleImages(images);
  };


  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth={false} disableGutters>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
        }} />
        <Box sx={{
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }} />
        <Box sx={{
          color: 'yellow',
          py: 8,
          textAlign: 'center',
          my: 8
        }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white' }}>
            Welcome to
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom className="animated-text">
            Taxi Service
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Get Taxi Now: <span className="animated-text">800-5-800</span>
          </Typography>
          <img src={car} alt="Taxi" className="car-image" style={{ position: 'relative', width: '40%', maxHeight: '400px', bottom: '10%' }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <ButtonBase href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" sx={{ marginRight: '16px' }}>
              <img src={playstoreImage} alt="Play Store" style={{ width: '150px', borderRadius: '5px' }} />
            </ButtonBase>
            <ButtonBase href="https://apps.apple.com/store" target="_blank" rel="noopener noreferrer">
              <img src={iosImage} alt="App Store" style={{ width: '150px' }} />
            </ButtonBase>
          </Box>
        </Box>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ bgcolor: '#FFC700', color: 'black', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Our Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" px={2}>
                <LocationOnIcon style={{ color: 'white', fontSize: 60 }} />
                <Typography variant="h6">Outstation Taxi Cab</Typography>
                <Typography variant="body1">
                  Reliable and comfortable taxi service for outstation trips, ensuring a hassle-free and enjoyable journey to your destination.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" px={2}>
                <LocalTaxiIcon style={{ color: 'white', fontSize: 60 }} />
                <Typography variant="h6">Oneway Taxi Cab</Typography>
                <Typography variant="body1">
                  Convenient and affordable one-way taxi service for single trips, providing flexibility and cost savings for your travel needs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" px={2}>
                <FlightTakeoffIcon style={{ color: 'white', fontSize: 60 }} />
                <Typography variant="h6">Airport Taxi Cab</Typography>
                <Typography variant="body1">
                  Punctual and reliable airport taxi service to ensure you reach the airport on time and travel comfortably.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" px={2}>
                <DirectionsCarIcon style={{ color: 'white', fontSize: 60 }} />
                <Typography variant="h6">Local Taxi Cab</Typography>
                <Typography variant="body1">
                  Efficient and comfortable local taxi service for your daily commute and travel needs within the city.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center" px={2}>
                <AirportShuttleIcon style={{ color: 'white', fontSize: 60 }} />
                <Typography variant="h6">Traveller Service</Typography>
                <Typography variant="body1">
                  Spacious and comfortable traveller service for group travel, ensuring a pleasant journey for everyone.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About us Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                We are a leading taxi service provider in Chhattisgarh, committed to providing reliable and safe transportation solutions for our customers.
              </Typography>
              <Button variant="outlined" color="primary" onClick={handleReadMore}>
                {showMore ? 'Read Less' : 'Read More'}
              </Button>
              {showMore && (
                <div>
                  <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                    <strong>At Taxi Service, we are committed to providing our customers with the most convenient and affordable taxi service in Chhattisgarh.</strong> With our easy-to-use online taxi booking system, you can book a taxi from the comfort of your own home, office, or anywhere you may be.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    We take great pride in providing our customers with safe and reliable transportation, and our team of experienced drivers is dedicated to ensuring that you arrive at your destination on time and in comfort.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    At Taxi Service, we understand that our customers have busy lives, which is why we offer flexible scheduling options to fit your needs.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    With our convenient online taxi booking system, booking your taxi has never been easier. Simply visit our website and enter your pick-up and drop-off locations, select your preferred vehicle type, and confirm your booking. It’s that easy!
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Choose Taxi Service for your next ride and experience the convenience of online taxi booking.
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img src='https://i.pinimg.com/originals/57/07/26/570726f9398849aa200fbcba9466f9f2.gif' alt="Taxi" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: '#222', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Why Choose Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <LocalCarWashIcon style={{ width: '60px', height: '60px', color: '#FFA000' }} />
                <Typography variant="h6">Clean Car</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <EmojiPeopleIcon style={{ width: '60px', height: '60px', color: '#FFA000' }} />
                <Typography variant="h6">Professional Drivers</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <VerifiedIcon style={{ width: '60px', height: '60px', color: '#FFA000' }} />
                <Typography variant="h6">Reliable Service</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <AccountBalanceWalletIcon style={{ width: '60px', height: '60px', color: '#FFA000' }} />
                <Typography variant="h6">Transparent Billing</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Family trip section */}
      <Box sx={{ bgcolor: '#FFC700', py: 8, position: 'relative' }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Unforgettable Family Trips, Picnics, and Sightseeing Adventures
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={6}>
              <Box>
                <ul style={{ listStyleType: 'none', padding: 0, color: 'black' }}>
                  <li>1. Spacious and Comfortable Vehicles for Memorable Family Travels</li>
                  <li>2. A Range of Vehicle Options to Suit Your Family’s Needs</li>
                  <li>3. Dedicated and Experienced Drivers for a Safe and Pleasant Journey</li>
                  <li>4. Customized Itineraries Tailored to Your Family’s Preferences</li>
                  <li>5. Expert Recommendations for Family-Friendly Attractions and Scenic Picnic Spots</li>
                  <li>6. Entertainment Options to Keep the Whole Family Engaged</li>
                  <li>7. Flexible Timings and Duration for a Convenient and Enjoyable Trip</li>
                  <li>8. Competitive Pricing for Excellent Value and Transparency</li>
                </ul>
                <Box textAlign="center" mt={4}>
                  <Button variant="contained" sx={{ bgcolor: 'purple', color: 'white' }}>Learn more</Button>
                </Box>
              </Box>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={6}>
              <img
                src="https://i0.wp.com/ugokawaii.com/wp-content/uploads/2023/04/school-bus.gif?ssl=1"
                alt="Family Trips Bus"
                style={{ width: '100%', height: 'auto' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Image+not+found'; }}
              />
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ bgcolor: '#F5F5F5', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Gallery
          </Typography>
          <Box textAlign="center" mb={4}>
            {['All', 'Hatchback', 'Sedan', 'SUV'].map(cat => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setCategory(cat)}
                sx={{ m: 1, bgcolor: category === cat ? '#FFC700' : 'default' }}
              />
            ))}
          </Box>
          <Grid container spacing={4}>
            {filteredImages.map((image, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ position: 'relative' }}>
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                    onClick={() => setIndex(idx)}
                  />
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}>
                    <Typography variant="h6">{image.type}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          {visibleImages.length < images.length && (
            <Box textAlign="center" mt={4}>
              <Button variant="contained" sx={{ bgcolor: '#FFC700' }} onClick={handleLoadMore}>
                Load More
              </Button>
            </Box>
          )}
          {index >= 0 && (
            <Lightbox
              mainSrc={filteredImages[index].src}
              nextSrc={filteredImages[(index + 1) % filteredImages.length].src}
              prevSrc={filteredImages[(index + filteredImages.length - 1) % filteredImages.length].src}
              onCloseRequest={() => setIndex(-1)}
              onMovePrevRequest={() => setIndex((index + filteredImages.length - 1) % filteredImages.length)}
              onMoveNextRequest={() => setIndex((index + 1) % filteredImages.length)}
            />
          )}
        </Container>
      </Box>


      {/* Download the App Section */}
      {/* <Box sx={{ bgcolor: '#151515', color: '#FFC700', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Download the App
          </Typography>
          <Button variant="contained" color="primary" sx={{ mx: 2, my: 1 }}>Google Play</Button>
          <Button variant="contained" color="primary" sx={{ mx: 2, my: 1 }}>App Store</Button>
        </Container>
      </Box> */}

      {/* 24/7 services Section */}
      <Box sx={{ bgcolor: 'white', color: 'black', py: 8, boxShadow: 3 }}>
        <Container>
          <Typography variant="h4" textAlign="center">
            24/7 Customer <span style={{ color: 'yellow' }}>Service</span>
          </Typography>
          <Typography variant="body1" textAlign="center" mt={2}>
            A Dedicated 24x7 Customer Service Team Is Usually At Your Service To Assist Solve Any Problem.
          </Typography>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: '#1a1a1a', py: 8, color: 'white' }}>
        <Container>
          <Typography variant="h3" gutterBottom textAlign="center">
            FAQ
          </Typography>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ bgcolor: '#FFC700' }}>
              <Typography>How do I book a taxi with Taxi Service?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can book a taxi with Taxi Service by visiting our website or calling our customer service number.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ bgcolor: '#FFC700' }}>
              <Typography>What types of vehicles do you offer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer a range of vehicles including sedans, SUVs, and hatchbacks to meet your travel needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ bgcolor: '#FFC700' }}>
              <Typography>Can I book a taxi for outstation travel?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can book a taxi for outstation travel with Taxi Service. We offer bookings from Chhattisgarh to anywhere in India.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ bgcolor: '#FFC700' }}>
              <Typography>What are your operating hours?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our operating hours are 24/7. We are always available to assist you with your travel needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ bgcolor: '#FFC700' }}>
              <Typography>How much does it cost to book a taxi with Taxi Service?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The cost of booking a taxi depends on the type of vehicle and the distance traveled. Please visit our website for detailed pricing information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ bgcolor: '#FFC700' }}>
              <Typography>Are your drivers experienced and trained?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, our drivers are experienced and trained to provide you with a safe and pleasant journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>


      {/* Partners Section */}
      <Box sx={{ bgcolor: '#151515', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            How It <span style={{ color: '#ffd700' }}>Work?</span>
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <FilledIcon>
                        <WebsiteIcon sx={{ color: 'white' }} />
                      </FilledIcon>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Visit Our Website</Typography>
                      <Typography variant="body2">
                        Visit Our Website By Google Search Or Log On http://taxiservice.com/
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <FilledIcon>
                        <TaxiIcon sx={{ color: 'white' }} />
                      </FilledIcon>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Book A Taxi Cab</Typography>
                      <Typography variant="body2">
                        Book A Cab By Fill The Form And Get Confirmation Of Your Booking.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <FilledIcon>
                        <PaymentIcon sx={{ color: 'white' }} />
                      </FilledIcon>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Scan to pay</Typography>
                      <Typography variant="body2">
                        After Get Your Booking Confirmation You Can Pay Through Scan QR Code.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} md={6}>
            <img src="/path/to/image.png" alt="QR Code" style={{ width: '100%' }} />
          </Grid> */}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}

export default Home;
