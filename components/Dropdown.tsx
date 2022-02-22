import Button from "./Button";

export default function Dropdown() {
  return (
    <div className='dropdown'>
      <Button variant='text' label='Проекты' />
      <div className='dropdown-menu'>Dropdown menu</div>
    </div>
  )
}
