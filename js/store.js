window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.8s",
  });

  const category = document.querySelectorAll(".list li"); //이거 모든 li가 선택됨.,. 내가 원하는 건 3묶음으로 선택하는건데!? 동작은 문제없지만, 원하는 그림이 아님... 나중에 수정해야함.
  console.log(category);
  //const appliance = document.querySelectorAll("#appliance li");
  //const cookWear = document.querySelectorAll("#cookWear li");

  for (el of category) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      console.log(sort);
      grid.arrange({
        filter: sort,
      });

      for (el of category) {
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    });
  }

});

const article = document.querySelectorAll("section article");
const aside = document.querySelector("aside");
const txt = aside.querySelectorAll(".txt li");
const wrapper = aside.querySelector('.wrapper');
console.log(txt);
const link = aside.querySelector("a");
const img = aside.querySelector("img");
const closeBtn = aside.querySelector("span");
const _top = aside.querySelector(".top");
const _bottom = aside.querySelector(".bottom");
const _left = aside.querySelector(".left");
const _right = aside.querySelector(".right");

closeBtn.addEventListener("click", () => {

  wrapper.style.display = 'none';

  new Anim(aside, {
    prop: "bottom",
    value: "-100%",
    duration: 200,
    callback: () => {
      new Anim(closeBtn, {
        prop: "opacity",
        value: 0,
        duration: 500,
        callback: () => {
          new Anim(_top, {
            prop: "width",
            value: "0%",
            duration: 0,
            callback: () => {
              new Anim(_top, {
                prop: "opacity",
                value: 1,
                duration: 0,
                callback: () => {
                  new Anim(_right, {
                    prop: "height",
                    value: "0%",
                    duration: 0,
                    callback: () => {
                      new Anim(_right, {
                        prop: "opacity",
                        value: 1,
                        duration: 0,
                        callback: () => {
                          new Anim(_bottom, {
                            prop: "width",
                            value: "0%",
                            duration: 0,
                            callback: () => {
                              new Anim(_bottom, {
                                prop: "opacity",
                                value: 1,
                                duration: 0,
                                callback: () => {
                                  new Anim(_left, {
                                    prop: "height",
                                    value: "0%",
                                    duration: 0,
                                    callback: () => {
                                      new Anim(_left, {
                                        prop: "opacity",
                                        value: 1,
                                        duration: 0,
                                        callback: () => {
                                          new Anim(link, {
                                            prop: "opacity",
                                            value: 0,
                                            duration: 500,
                                          });
                                        },
                                      });
                                    },
                                  });
                                },
                              });
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  });
});

for (let el of article) {
  el.addEventListener("click", (e) => {
    
    wrapper.style.display = 'block';

    const innerTxt = e.currentTarget.querySelectorAll(".txt li");
    console.log(innerTxt);
    txt[0].innerText = innerTxt[0].innerText;
    txt[1].innerText = innerTxt[1].innerText;
    txt[2].innerText = innerTxt[2].innerText;

    const src = e.currentTarget.querySelector("img").getAttribute("src");
    console.log(src);
    img.setAttribute("src", src);
    new Anim(aside, {
      prop: "bottom",
      value: "10%",
      duration: 200,
      callback: () => {
        new Anim(closeBtn, {
          prop: "opacity",
          value: 1,
          duration: 300,
          callback: () => {
            new Anim(_top, {
              prop: "width",
              value: '30%' ,
              duration: 300,
              callback: () => {
                /*new Anim(_top, {
                      prop: "opacity",
                      value: 0,
                      duration: 0,
                      callback: () => {*/
                new Anim(_right, {
                  prop: "height",
                  value: "45.5%",
                  duration: 300,
                  callback: () => {
                    /*new Anim(_right, {
                              prop: "opacity",
                              value: 0,
                              duration: 0,
                              callback: () => {*/
                    new Anim(_bottom, {
                      prop: "width",
                      value: "30%",
                      duration: 300,
                      callback: () => {
                        /* new Anim(_bottom, {
                                      prop: "opacity",
                                      value: 0,
                                      duration: 0,
                                      callback: () => { */
                        new Anim(_left, {
                          prop: "height",
                          value: "45%",
                          duration: 300,
                          callback: () => {
                            /* new Anim(_left, {
                                              prop: "opacity",
                                              value: 0,
                                              duration: 0,
                                              callback:()=>{ */
                            new Anim(_top, {
                              prop: "opacity",
                              value: 0,
                              duration: 100,
                              callback: () => {
                                new Anim(_right, {
                                  prop: "opacity",
                                  value: 0,
                                  duration: 100,
                                  callback: () => {
                                    new Anim(_bottom, {
                                      prop: "opacity",
                                      value: 0,
                                      duration: 100,
                                      callback: () => {
                                        new Anim(_left, {
                                          prop: "opacity",
                                          value: 0,
                                          duration: 100,
                                          callback: () => {
                                            new Anim(link, {
                                              prop: "opacity",
                                              value: 1,
                                              duration: 200,
                                              callback: () => {},
                                            });
                                          },
                                        });
                                      },
                                    });
                                  },
                                });
                              },
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
  });
}
