import styles from "./HomeBanner.module.css"

export default function HomeBanner() {
  return (
    <>
      <div className={styles['background-image']}>
        <img src="https://images.unsplash.com/photo-1507149677524-254e3ebb240f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dummy-wallpaper"
        />
      </div>
      <section className={styles['home-banner-container']}>
        <div>
          <p>
            Welcome to my website!
          </p>
          <p>
            This is for Raditya's image
          </p>
        </div>
      </section>
    </>
  )
}