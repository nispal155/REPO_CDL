import React from 'react';
import Card from './components/card';
import Button from './components/button'; 

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Card 
        title="Nispal Bhattarai" 
        description="This is a reusable card component."
        image="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/486558039_2486402318370755_6563944892719751323_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PBt4u8FIROAQ7kNvwFeaJlP&_nc_oc=Adknih9Og9X2e28Mv5KtbsuqkZGuBwbiQTjGAG7R4kMYlKVr-jOfq3tov7mkkoTDA2uggdii_phBrXyzNnHbP5a9&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=wSPZxCmCAhLLte9BPKJD_w&oh=00_AfNkk4IUMF_JlWLFQOzMYZBzvb5nCG_NHIhqzkzMn0xZoA&oe=686936D9"
      >
        <Button 
          label="Reusable Button" 
          variant="primary" 
          handleClick={() => alert('Clicked!')} 
        />

      </Card>

    <Card 
        title="Nispal Bhattarai" 
        description="This is a reusable card component."
        image="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/486558039_2486402318370755_6563944892719751323_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PBt4u8FIROAQ7kNvwFeaJlP&_nc_oc=Adknih9Og9X2e28Mv5KtbsuqkZGuBwbiQTjGAG7R4kMYlKVr-jOfq3tov7mkkoTDA2uggdii_phBrXyzNnHbP5a9&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=wSPZxCmCAhLLte9BPKJD_w&oh=00_AfNkk4IUMF_JlWLFQOzMYZBzvb5nCG_NHIhqzkzMn0xZoA&oe=686936D9"
      >
        <Button 
          label="Reusable Button" 
          variant="primary" 
          handleClick={() => alert('Clicked!')} 
        />

      </Card>
      
    </div>
  );
}

export default App;
