import React, { useEffect, useState, useRef } from "react";
import "./Allsnacks.css";
import SnackView from "./SnackView/SnackView";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Snacks";
import Navbar from "../Navbar/Navbar.js";
import axios from "axios";
const left =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054686909665320/unknown.png";

const rightArrow =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054992049479730/unknown.png";
//for filtering, im thinking of a checkbox where you can select as many filters as you want
//if user selects a filter, it gets pushed to an array
//only render sections that is included in that array
//if array is empty aka no filter, then render everything

const Allsnacks = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state);
  const salty = products.filter(
    (item) => item.cat.type === "Salty" && item.display
  );
  const sweet = products.filter(
    (item) => item.cat.type === "Sweet" && item.display
  );
  const healthy = products.filter(
    (item) => item.cat.type === "Healthy" && item.display
  );
  const frozen = products.filter(
    (item) => item.cat.type === "Refrigerated/Frozen" && item.display
  );

  const grocery = products.filter(
    (item) => item.cat.type === "Grocery" && item.display
  );

  const sweetSnackRef = useRef(null);
  const healthySnackRef = useRef(null);
  const saltySnacksRef = useRef(null);
  const frozenSnacksRef = useRef(null);
  const groceryRef = useRef(null);

  const SnackCards = salty.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const SweetSnacks = sweet.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const HealthySnacks = healthy.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const FrozenSnacks = frozen.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Grocery = grocery.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const leftScroll = (reference) => {
    reference.current.scrollLeft += -400;
  };

  const rightScroll = (reference) => {
    reference.current.scrollLeft += 400;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div className='parent'>
        <div className='filters'>
          <div style={{ fontSize: 20, marginBottom: "20px" }}>Filters</div>
          <div>
            <div className='checkbox-div'>
              <input type='checkbox' className='checkbox-input' />
              Sweet
            </div>
            <div className='checkbox-div'>
              <input type='checkbox' className='checkbox-input' />
              Salty
            </div>
            <div className='checkbox-div'>
              <input type='checkbox' className='checkbox-input' />
              Healthy
            </div>
            <div className='checkbox-div'>
              <input type='checkbox' className='checkbox-input' />
              Frozen Snacks
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "83%",
          }}
        >
          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Sweet Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                View All
              </div>
              <div
                className='leftcircle'
                onClick={() => {
                  leftScroll(sweetSnackRef);
                }}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(sweetSnackRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={sweetSnackRef}>
              {SweetSnacks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Healthy Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                View All
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(healthySnackRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(healthySnackRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={healthySnackRef}>
              {HealthySnacks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Salty Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                className='leftcircle'
                onClick={() => leftScroll(saltySnacksRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(saltySnacksRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={saltySnacksRef}>
              {SnackCards}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Frozen Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                View All
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(frozenSnacksRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(frozenSnacksRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={frozenSnacksRef}>
              {FrozenSnacks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Grocery
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                View All
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(groceryRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(groceryRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={groceryRef}>
              {Grocery}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allsnacks;

/*







        <div className='snack-title'>
          Sweet Snacks
          <div className='container'>
            <img src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg' />
            <img src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg' />
            <img src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg' />
            <img src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg' />
            <img src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg' />
          </div>
        </div>
        */
