import styles from './avatar.module.css'

export function Avatar({ hasBorder = true, ...props }) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}