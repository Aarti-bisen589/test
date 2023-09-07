gsap.from("#left img",{
  scale: .2,
    opacity: 0,
    stagger: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#left",
        scroller: "body",
        start: "top 5%",
        end: "top 15%",
        scrub:1
    }

})

gsap.from("#text",{
    y: 30,
    // scale: .2,
    opacity: 0,
    stagger: 1,
    // rotation: 180, x: 10, ypercent: 50,
      duration: 1,
      delay: 1,
      scrollTrigger: {
          trigger: "#text",
          scroller: "body",
          start: "top 10%",
          end: "top 15%",
          scrub:1
      }
  
  })




gsap.from("#right img",{
    scale: .2,
    opacity: 0,
    stagger: 1,
    rotation: 180, x: 20, ypercent: 50,
      duration: 1,
      delay: 2,
      scrollTrigger: {
          trigger: "#right",
          scroller: "body",
          start: "top 25%",
          end: "top 35%",
          scrub:1
      }
  
  })


  gsap.from("#txt ",{
    y: 20,
    // scale: .2,
    opacity: 0,
    stagger: 1,
    // rotation: 180, x: 10, ypercent: 50,
      duration: 1,
      delay: 1,
      scrollTrigger: {
          trigger: "#txt",
          scroller: "body",
          start: "top 15%",
          end: "top 20%",
          scrub:1
      }
  
  })


  gsap.from("#car1 img",{
    // scale: .2,
    opacity: 0,
    stagger: 1,
    rotation: 180, x: 20, ypercent: 50,
      duration: 1,
      delay: 2,
      scrollTrigger: {
          trigger: "#car1",
          scroller: "body",
          start: "top 25%",
          end: "top 35%",
          scrub:1
      }
  
  })
  gsap.from("#car2 img",{
    scale: .2,
    opacity: 0,
    stagger: 1,
    rotation: 180, x: 20, ypercent: 50,
      duration: 1,
      delay: 2,
      scrollTrigger: {
          trigger: "#car2",
          scroller: "body",
          start: "top 25%",
          end: "top 35%",
          scrub:1
      }
  
  })
  gsap.from("#car3 img",{
    scale: .2,
    opacity: 0,
    stagger: 1,
    rotation: 180, x: 20, ypercent: 50,
      duration: 1,
      delay: 2,
      scrollTrigger: {
          trigger: "#car3",
          scroller: "body",
          start: "top 25%",
          end: "top 35%",
          scrub:1
      }
  
  })

  
  gsap.from("#text1",{
    y: 30,
    scale: .2,
    opacity: 0,
    stagger: 1,
    // rotation: 180, x: 10, ypercent: 50,
      duration: 1,
      delay: 1,
      scrollTrigger: {
          trigger: "#text1",
          scroller: "body",
          start: "top 35%",
          end: "top 40%",
          scrub:1
      }
  
  })



 