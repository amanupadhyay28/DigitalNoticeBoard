import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
``
import './Drag&Grop.css';
import PomodoroTimer from './PomodoroTimer';
const WidgetBoard = ({ widgets }) => {
  const [widgetList, setWidgetList] = React.useState(widgets);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(widgetList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgetList(items);
  };

  return (
    // <DragDropContext onDragEnd={onDragEnd}>
    //   <Droppable droppableId="widgets">
    //     {(provided) => (
    //       <div
    //         {...provided.droppableProps}
    //         ref={provided.innerRef}
    //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    //       >
    //         {widgetList.map((widget, index) => (
    //           <Draggable key={widget.id} draggableId={widget.id} index={index}>
    //             {(provided) => (
    //               <div
    //                 ref={provided.innerRef}
    //                 {...provided.draggableProps}
    //                 {...provided.dragHandleProps}
    //                 className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    //               >
    //                 {widget.component}
    //               </div>
                  
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="widgets">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {widgetList.map((widget, index) => (
            <Draggable key={widget.id} draggableId={widget.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`p-4 rounded-lg shadow-md ${widget.component.type === PomodoroTimer ? 'glassmorphic-timer' : 'bg-white dark:bg-gray-800'}`}
                >
                  {widget.component.type === PomodoroTimer ? (
                    <div className="pomodoro-container">
                      {widget.component}
                    </div>
                  ) : (
                    widget.component
                  )}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
  );
};

export default WidgetBoard;
