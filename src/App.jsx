import './App.css'
import Navbar from './components/Navbar/Navbar'
import TodoContainer from './components/Todo/TodoContainer'


export default function app(){
  return (
    <>
      <Navbar />
      <TodoContainer />
    </>
  )
}