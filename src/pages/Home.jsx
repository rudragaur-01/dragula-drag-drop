import { useEffect, useRef, useState } from "react";
import CardComp1 from "../components/CardComp1";
import CardComp2 from "../components/CardComp2";
import dragula from "dragula";
import "dragula/dist/dragula.css";

const initialLeft = [
  { id: 1, name: "Rudra Gaur", role: "Frontend Developer" },
  { id: 2, name: "Aarav Sharma", role: "Backend Engineer" },
  { id: 3, name: "Priya Mehta", role: "UI/UX Designer" },
  { id: 4, name: "Rohan Verma", role: "Project Manager" },
  { id: 5, name: "Neha Kapoor", role: "QA Tester" },
];

const initialRight = [
  { id: 1, name: "Aditya Singh", role: "Product Designer" },
  { id: 2, name: "Isha Patel", role: "Full Stack Developer" },
  { id: 3, name: "Karan Malhotra", role: "DevOps Engineer" },
  { id: 4, name: "Simran Kaur", role: "Marketing Strategist" },
  { id: 5, name: "Vikram Rao", role: "Data Analyst" },
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
      mirrorContainer: document.body, // key: Dragula won't move original DOM node
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
      const getDropIndex = (list, containetRef) => {
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

      drake.cancel(true); // cancel DOM manipulation — React will re-render
    });
    return () => drake.destroy();
  }, [leftItems, rightItems]);

  return (
    <div className="grid grid-cols-2 h-full w-full border-2 border-black">
      <div
        ref={leftRef}
        className="grid grid-cols-3 border-r border-gray-400 mx-2 "
      >
        {leftItems.map((item) => (
          <div key={item.id} data-id={item.id} className="mx-5 my-5">
            <CardComp1 id={item.id} name={item.name} role={item.role} />
          </div>
        ))}
      </div>

      <div ref={rightRef} className="grid grid-cols-3 mx-2  pl-2">
        {rightItems.map((item) => (
          <div key={item.id} data-id={item.id} className="mx-5 my-5">
            <CardComp2  id={item.id} name={item.name} role={item.role} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
