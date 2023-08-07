import React, { useEffect } from "react";
import { fetchDataRequest } from "../redux/action";
import { connect } from "react-redux";
import Loading from "../spinner/Loading";
import "./cardstyles.css";

const CardView = (props) => {
  const { data, error, fetchDataRequest } = props;

  useEffect(() => {
    fetchDataRequest();
  }, [fetchDataRequest]);

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }

  return (
    <>
      {data ? (
        <div className="container">
          {data.map((item, index) => {
            return (
              <div key={index} class="card">
                <div class="card-image">
                  <img src={item.thumbnail} alt="Card Image" />
                </div>
                <div className="card-content">
                  <section className="title">
                    <p>{item.title}</p>
                  </section>

                  <div className="sub">
                    <section className="desc">
                      <p>{item.description}</p>
                    </section>
                    <section className="aval">
                      <p>Stock:{item.stock}</p>
                      <p>Rating:{item.rating}</p>
                    </section>
                    <section className="price">
                      <p>
                        <span className="priceVal">Price:${item.price}</span>
                      </p>
                    </section>
                    <section className="btn">
                      <button className="btnStyle">BOOK NOW</button>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="load">
          <Loading />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.dataReducer.data.products,
  error: state.dataReducer.error,
});

const mapDispatchToProps = {
  fetchDataRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
