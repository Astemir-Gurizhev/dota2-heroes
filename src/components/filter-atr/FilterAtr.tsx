import React from 'react'
import { useDispatch } from 'react-redux'
import { setAttrFilter } from '../../redux/slices/filterSlice'
import styles from './FilterAtr.module.css'

interface FilterAtrProps {
	activeAttr: string
	setActiveAttr: (attr: string) => void
}

export const FilterAtr: React.FC<FilterAtrProps> = ({
	activeAttr,
	setActiveAttr,
}) => {
	const dispatch = useDispatch()

	const handleAttrClick = (attr: string) => {
		if (activeAttr === attr) {
			setActiveAttr('')
			dispatch(setAttrFilter(''))
		} else {
			setActiveAttr(attr)
			dispatch(setAttrFilter(attr))
		}
	}

	return (
		<div className={styles.filterAtr}>
			<p>Сортировка героев по атрибуту:</p>
			<img
				onClick={() => handleAttrClick('strength')}
				className={activeAttr === 'strength' ? styles.activeIcon : ''}
				src='./strength.png'
				alt='Сила'
			/>
			<img
				onClick={() => handleAttrClick('agi')}
				className={activeAttr === 'agi' ? styles.activeIcon : ''}
				src='./agi.png'
				alt='Ловкость'
			/>
			<img
				onClick={() => handleAttrClick('int')}
				className={activeAttr === 'int' ? styles.activeIcon : ''}
				src='./int.png'
				alt='Интеллект'
			/>
		</div>
	)
}
