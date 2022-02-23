import styles from 'styles/SideNav.module.css'
import { HiOutlineX } from 'react-icons/hi'
import Portal from './Portal'
import Button from './Button'
import { AnimatePresence, motion } from 'framer-motion'
export interface SideNavProps {
  show: boolean
  onClose: () => void
}

export default function SideNav({ show, onClose }: SideNavProps) {
  return (
    <Portal selector='#portal'>
      <AnimatePresence>
        { show && (
          <>
            <motion.div
              className={ styles.overlay }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={ onClose }
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav className={ styles.nav }>
                <ul>
                  <li>
                    <Button
                      as='link'
                      href='/'
                      variant='text'
                      label='Главная'
                      onClick={ onClose }
                    />
                  </li>
                  <li>
                    <Button
                      as='link'
                      href='#about'
                      variant='text'
                      label='Обо мне'
                      onClick={ onClose }
                    />
                  </li>
                  <li>
                    <Button
                      as='link'
                      href='#skills'
                      variant='text'
                      label='Навыки'
                      onClick={ onClose }
                    />
                  </li>
                  <li>
                    <Button
                      as='link'
                      href='#projects'
                      variant='text'
                      label='Проекты'
                      onClick={ onClose }
                    />
                  </li>
                  <li>
                    <Button
                      as='link'
                      href='#contact'
                      variant='text'
                      label='Связаться'
                      onClick={ onClose }
                    />
                  </li>
                </ul>
                <Button
                  className={ styles.closeBtn }
                  variant='icon'
                  onClick={ onClose }
                >
                  <HiOutlineX />
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  )
}