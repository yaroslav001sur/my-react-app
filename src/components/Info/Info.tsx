import './Info.module.css';

const Info = () => {
  return (
    <section className="info">
      <h2 className="info__title">Everything you want to know in one place.</h2>
      <div className="info__card-display"></div>
      <div className="info__features-slider">
        <div className="info__feature">
          <h3 className="info__feature-title">Professional Profile 1</h3>
          <p className="info__feature-text">
            1. We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter.
          </p>
        </div>
        <div className="info__feature">
          <h3 className="info__feature-title">Professional Profile 2</h3>
          <p className="info__feature-text">
            2. We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter.
          </p>
        </div>
        <div className="info__feature">
          <h3 className="info__feature-title">Professional Profile 3</h3>
          <p className="info__feature-text">
            3. We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;