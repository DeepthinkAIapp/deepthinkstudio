'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ServiceCityData } from '../config/cityData'

interface ServiceCityPageTemplateProps extends ServiceCityData {}

export default function ServiceCityPageTemplate({
  service,
  serviceSlug,
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  heroImage,
  landmarks,
  businessDistricts,
  content,
}: ServiceCityPageTemplateProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero service-city-hero" style={{ 
        position: 'relative',
        color: 'white',
        padding: '4rem 0',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }} />
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
          zIndex: 2
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              {service} Services in {cityName}, {state}
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2rem',
              opacity: '0.95',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              {content.description} for {cityName} businesses. 
              Drive real results with our proven strategies and local expertise.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#contact" 
                style={{
                  background: '#C6FF1A',
                  color: '#333',
                  padding: '1rem 2rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}
              >
                Get Free Quote
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  border: '2px solid white',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}
              >
                Call {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
              Professional {service} Services in {cityName}
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              marginBottom: '2rem'
            }}>
              {content.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: '#333' 
          }}>
            Why Choose Our {service} Services?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {content.benefits.map((benefit, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#667eea',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  ✓
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem', 
                  color: '#333' 
                }}>
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '2rem', 
            color: '#333' 
          }}>
            Our {service} Solutions
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {content.useCases.map((useCase, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem', 
                    color: '#333' 
                  }}>
                    {useCase}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: '#333' 
          }}>
            Our {service} Process
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {content.process.map((step, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </div>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#333',
                    margin: 0
                  }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: '#333' 
            }}>
              {service} Pricing
            </h2>
            <div style={{
              background: '#f8fafc',
              padding: '2rem',
              borderRadius: '10px',
              border: '2px solid #667eea'
            }}>
              <p style={{ 
                fontSize: '1.3rem', 
                color: '#333',
                fontWeight: '600',
                margin: 0
              }}>
                {content.pricing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              textAlign: 'center', 
              marginBottom: '2rem', 
              color: '#333' 
            }}>
              Why Choose DeepThink Studio for {service} in {cityName}?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              textAlign: 'center'
            }}>
              {content.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      {/* Local Information Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            <div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                marginBottom: '2rem', 
                color: '#333' 
              }}>
                About {cityName}
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#666',
                marginBottom: '2rem'
              }}>
                {cityName} is a thriving business community with diverse opportunities for growth. 
                Our local expertise helps us create {service.toLowerCase()} strategies that resonate 
                with {cityName} customers and drive real business results.
              </p>
              
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem', 
                color: '#667eea' 
              }}>
                Popular Landmarks
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {landmarks.map((landmark, index) => (
                  <li key={index} style={{ 
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: '#f8fafc',
                    borderRadius: '5px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                      {landmark.name}
                    </h4>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>
                      {landmark.address}
                    </p>
                    <a 
                      href={landmark.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#667eea', textDecoration: 'none' }}
                    >
                      Learn More →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem', 
                color: '#667eea' 
              }}>
                Business Districts
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {businessDistricts.map((district, index) => (
                  <div key={index} style={{
                    padding: '1.5rem',
                    background: '#f8fafc',
                    borderRadius: '5px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                      {district.name}
                    </h4>
                    <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
                      {district.description}
                    </p>
                    <Link 
                      href={district.link}
                      style={{ 
                        color: '#667eea', 
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}
                    >
                      Our Services →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: '#333' 
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {content.faq.map((faq, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    marginBottom: '1rem', 
                    color: '#333' 
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '4rem 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem' 
          }}>
            Ready to Transform Your {cityName} Business with {service}?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: '0.9'
          }}>
            Get your free consultation and discover how we can help your business grow online.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#contact" 
              style={{
                background: '#C6FF1A',
                color: '#333',
                padding: '1rem 2rem',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Get Free Quote
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid white'
              }}
            >
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
