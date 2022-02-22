import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from 'styles/Dropdown.module.css'
import Button from './Button'

export default function Dropdown() {
  const [isShowing, setIsShowing] = useState(false)

  const toggleShow = () => setIsShowing(currentValue => !currentValue)

  return (
    <div className={ styles.dropdown }>
      <Button
        className={ styles.dropdownBtn }
        variant='text'
        label='Проекты'
        onClick={ toggleShow }
      />
      <AnimatePresence>
        { isShowing && (
          <motion.div
            className={ styles.dropdownMenu }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
              <li>
                <Button
                  className={ styles.dropdownMenuItem }
                  variant='text'
                  as='link' 
                  href='#'
                  label='Project 1'
                />
              </li>
              <li>
                <Button
                  className={ styles.dropdownMenuItem }
                  variant='text'
                  as='link' 
                  href='#'
                  label='Project 2'
                />
              </li>
              <li>
                <Button
                  className={ styles.dropdownMenuItem }
                  variant='text'
                  as='link' 
                  href='#'
                  label='Project 3'
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  )
}
