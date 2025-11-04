// InfoBanner.jsx
import './Infobanner.css';

const InfoBanner = () => {
  const features = [
    {
      icon: '🎧',
      title: '24/7 SUPPORT',
      subtitle: 'Dedicated support',
    },
    {
      icon: '📦',
      title: 'FREE SHIPPING',
      subtitle: 'On all orders over $50.00',
    },
    {
      icon: '🔒',
      title: '100% PAYMENT SECURE',
      subtitle: 'WE ensure secure payment',
    },
    {
      icon: '🚚',
      title: '30 DAYS RETURN GUARANTEE',
      subtitle: '30-days free return policy',
    },
  ];

  return (
    <div className="info-wrapper">
      <div className="info-banner">
        {features.map((item, index) => (
          <div key={index} className="info-card">
            <div className="info-icon">{item.icon}</div>
            <div className="info-text">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBanner;
