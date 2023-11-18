import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
<div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Dance2Gether - Where Dance Finds Partners!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            At Dance2Gether, we are passionate about bringing people together through the joy of dance. Our mission is to provide a platform that not only connects individuals who share a love for dance but also fosters a vibrant community where everyone can express themselves, make meaningful connections, and, of course, dance their hearts out!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="../public/images/couple-dancing-white-background.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../public/images/ballroom-14314_640.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../public/images/couple-performing-passionate-dance.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../public/images/waltz-1039385_1280.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../public/images/latina.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../public/images/man-holding-woman-air (2).jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../public/images/latin-929819_1920.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/register"
                className="inline-block rounded-md border border-transparent bg-red-400 px-8 py-3 text-center font-medium text-white hover:bg-red-900"
              >
                Join the community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Card className="text-center">
    
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text>
        At Dance2Gether, we are passionate about bringing people together through the joy of dance. Our mission is to provide a platform that not only connects individuals who share a love for dance but also fosters a vibrant community where everyone can express themselves, make meaningful connections, and, of course, dance their hearts out!
      </Card.Text>
      <Card.Title>What We Do?</Card.Title>
      <Card.Title>Connecting Dance Enthusiasts.</Card.Title>
      <Card.Text>
        Dance2Gether is more than just a dance partner finder; it's a community that celebrates movement and connection. Whether you're a seasoned dancer or someone looking to dip their toes into the world of dance, our platform is designed to connect you with like-minded individuals who share your passion.
      </Card.Text>
      <Card.Title>Finding Your Perfect Dance Partner.</Card.Title>
      <Card.Text>
        Finding the right dance partner is crucial to a fulfilling dance experience. We understand that the chemistry between partners can elevate the dance, making it a truly enjoyable and memorable activity. With our user-friendly interface and advanced matching algorithms, we help you discover the perfect dance partner based on your dance style, skill level, and preferences.
      </Card.Text>
      <Card.Title>Celebrating Diversity in Dance</Card.Title>
      <Card.Text>
        Dance is a universal language that transcends boundaries. We embrace diversity in dance styles, from salsa and tango to hip-hop and ballroom. Whether you're into social dancing, competitive routines, or just want a casual partner for dance classes, Dance2Gether is the place to be.
      </Card.Text>
      <Card.Title>Why Choose Dance2Gether?</Card.Title>
      <Card.Text>
        ✦ Tailored Matching: Our smart matching algorithms consider your dance preferences, skill level, and location to find the most compatible dance partners for you.
      </Card.Text>
      <Card.Text>
        ✦ Community Support: Connect with fellow dancers, join dance events, and share your passion within a supportive and lively community.
      </Card.Text>
      <Card.Text>
        ✦ Safety First: Your safety and privacy are our top priorities. Our platform employs robust security measures to ensure a secure and enjoyable dance experience.
      </Card.Text>
      <Card.Title>Join Us in the Dance Revolution!</Card.Title>
      <Card.Text>
      Whether you're seeking a partner for an upcoming dance event, looking to improve your dance skills, or simply want to share the joy of movement, Dance2Gether is here for you. Join our vibrant dance community and let the rhythm of connection sweep you off your feet! Get ready to dance, connect, and embark on an exciting journey with Dance2Gether.
      </Card.Text>
      
    </Card.Body>
  </Card>

  
 



</>
    
  )
}


export default AboutUs
