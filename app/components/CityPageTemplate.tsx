'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CityData } from '../config/cityData'

interface CityPageTemplateProps extends CityData {}

export default function CityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  heroImage,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections,
}: CityPageTemplateProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero city-hero" style={{ 
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
              Web Design Services in {cityName}, {state}
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2rem',
              opacity: '0.95',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Transform your {cityName} business with professional web design, SEO optimization, 
              and digital marketing solutions that drive real results.
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

      {/* Overview Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
              Professional Web Design Services in {cityName}
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              marginBottom: '2rem'
            }}>
              {contentSections.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: '#333' 
          }}>
            Our Web Design Services in {cityName}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {contentSections.webDesignServices.map((service, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem', 
                  color: '#667eea' 
                }}>
                  {service.service}
                </h3>
                <p style={{ 
                  color: '#666', 
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: '#555'
                }}>
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx} style={{ 
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#667eea',
                        fontWeight: 'bold'
                      }}>✓</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              textAlign: 'center', 
              marginBottom: '2rem', 
              color: '#333' 
            }}>
              Why Choose DeepThink Studio in {cityName}?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              textAlign: 'center'
            }}>
              {contentSections.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      {/* Local Information Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
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
                {contentSections.localInfo}
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
                    background: 'white',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
                    background: 'white',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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

      {/* Service Areas Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: '#333' 
            }}>
              Service Areas
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              marginBottom: '2rem'
            }}>
              {contentSections.serviceAreas}
            </p>
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
              <div style={{
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
                  How long does it take to build a website in {cityName}?
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Website development timelines vary based on complexity, but most projects are completed within 4-8 weeks. Simple business websites can be ready in 2-4 weeks, while complex e-commerce sites may take 6-12 weeks. We provide detailed timelines during our initial consultation.
                </p>
              </div>
              
              <div style={{
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
                  What makes web design different for {cityName} businesses?
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {cityName} businesses have unique local market characteristics, competitive landscapes, and customer behaviors. Our local expertise helps us create websites that resonate with {cityName} customers and perform well in local search results.
                </p>
              </div>
              
              <div style={{
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
                  Do you provide ongoing support for websites in {cityName}?
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Yes, we offer comprehensive ongoing support including website maintenance, updates, security monitoring, and performance optimization. Our support packages are designed to keep your {cityName} business website running smoothly and securely.
                </p>
              </div>
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
            Ready to Transform Your {cityName} Business Online?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: '0.9'
          }}>
            Get your free website audit and discover how we can help your business grow online.
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
