import styles from '@/styles/components/page.module.scss';

export default function Page(props)
{
  return (
    <div className={styles.page}>
      {props.children}
    </div>
  );
}