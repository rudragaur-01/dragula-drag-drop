import { useEffect, useRef, useState } from "react";
import CardComp1 from "../components/CardComp1";
import CardComp2 from "../components/CardComp2";
import dragula from "dragula";
import "dragula/dist/dragula.css";

const initialLeft = [
  { id: 101, name: "Rudra Gaur", role: "Frontend Developer" },
  { id: 102, name: "Aarav Sharma", role: "Backend Engineer" },
  { id: 103, name: "Priya Singh", role: "UI/UX Designer" },
  { id: 104, name: "Rohan Mehta", role: "Project Manager" },
  { id: 105, name: "Neha Patel", role: "QA Tester" },
];

const initialRight = [
  { id: 201, name: "Aditya Verma", role: "Product Designer" },
  { id: 202, name: "Isha Kapoor", role: "Full Stack Developer" },
  { id: 203, name: "Karan Malhotra", role: "DevOps Engineer" },
  { id: 204, name: "Simran Joshi", role: "Marketing Strategist" },
  { id: 205, name: "Vikram Reddy", role: "Data Analyst" },
];


const Home = () => {
  const [leftItems, setLeftItems] = useState(initialLeft);
  const [rightItems, setRightItems] = useState(initialRight);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const drake = dragula([leftRef.current, rightRef.current], {
      copy: false,
      revertOnSpill: true,
      mirrorContainer: document.body,
    });

    drake.on("drop", (el, target, source) => {
      const id = parseInt(el.dataset.id);
      const isLeftTarget = target === leftRef.current;
      const isLeftSource = source === leftRef.current;
      let movedItem;

      if (isLeftSource) {
        movedItem = leftItems.find((i) => i.id === id);
        setLeftItems(leftItems.filter((i) => i.id !== id));
      } else {
        movedItem = rightItems.find((i) => i.id === id);
        setRightItems(rightItems.filter((i) => i.id !== id));
      }

      const nextEl = el.nextSibling;
      const getDropIndex = (list, containerRef) => {
        if (!nextEl) return list.length;
        const nextId = parseInt(nextEl?.dataset?.id);
        return list.findIndex((i) => i.id === nextId);
      };

      if (isLeftTarget) {
        setLeftItems((prev) => {
          const index = getDropIndex(prev, leftRef);
          const newArr = [...prev];
          newArr.splice(index, 0, movedItem);
          return newArr;
        });
      } else {
        setRightItems((prev) => {
          const index = getDropIndex(prev, rightRef);
          const newArr = [...prev];
          newArr.splice(index, 0, movedItem);
          return newArr;
        });
      }

      drake.cancel(true);
    });

    return () => drake.destroy();
  }, [leftItems, rightItems]);

  return (
    <div className="flex flex-col items-center  w-full h-full px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full border-2 border-black rounded-lg overflow-hidden 
  ">
        <div
          ref={leftRef}
          className="grid grid-cols-2 xl:grid-cols-3 border-b md:border-b-0 md:border-r border-gray-400 p-2"
        >
          {leftItems.map((item, id) => (
            <div
              key={`left-${item.id}`}
              data-id={item.id}
              className="mx-3 my-3"
            >
              <CardComp1 id={id + 1} name={item.name} role={item.role} />
            </div>
          ))}
        </div>

        <div ref={rightRef} className="grid grid-cols-2 xl:grid-cols-3 p-2">
          {rightItems.map((item, id) => (
            <div
              key={`right-${item.id}`}
              data-id={item.id}
              className="mx-3 my-3"
            >
              <CardComp2 id={id + 1} name={item.name} role={item.role} />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 md:mt-4  text-gray-600 text-sm text-center px-2">
        Drag any team member card between columns — works beautifully on desktop
        and mobile ✨
      </p>
    </div>
  );
};

export default Home;
