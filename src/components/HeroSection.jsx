
import Card from 'react-bootstrap/Card';


const HeroSection = () => {
  return (
    <Card className='hero-section'>
      <Card.Img class="hero-img" variant="top" src="https://images.unsplash.com/photo-1604039619887-415341e31b58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2214&q=80" />
      <Card.Body>
        <Card.Title >Delete your TikTok ✋</Card.Title>
        <Card.Text className="hero-text" >
          It's time to read! 📚
        </Card.Text>
      </Card.Body>
  
    </Card>
  );
}

export default HeroSection;