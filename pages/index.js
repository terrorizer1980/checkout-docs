import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { ModifierGroup, Modifier, useModifiers } from './components/modifier'
import { Link, Route } from './components/router';

import { Intro } from './docs/intro'
import { QuickStart } from './docs/quickstart';

export default function Home() {
  const modifiers = useModifiers();

  return (
    <div className={styles.container}>
      <Head>
        <title>PayPal Checkout Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PayPal Checkout Docs
        </h1>

        <p className={styles.description}>
          Draft Docs for PayPal Web, iOS and Android integrations
        </p>

        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <h4>About</h4>
            <ul>
              <li><Link to='intro'>Intro</Link></li>
              <li><Link to='quickstart'>Quick Start</Link></li>
            </ul>
            <h4>Payment Methods</h4>
            <ul>
              <li>PayPal</li>
              { modifiers.web ? <li>Venmo</li> : null }
              <li>Pay Later</li>
              { modifiers.web ? <li>Cards</li> : null }
              { modifiers.web ? <li>Alternative Payments</li> : null }
              { modifiers.web ? <li>SEPA</li> : null }
            </ul>
            <h4>Components</h4>
            <ul>
              <li>Buttons</li>
              <li>Marks</li>
              { (modifiers.ios || modifiers.android) ? <li>Checkout</li> : null }
              { modifiers.web ? <li>Card Fields</li> : null }
            </ul>
            <h4>Reference</h4>
            <ul>
              <li>SDK</li>
              <li>API</li>
            </ul>
            <h4>Upgrade</h4>
            <ul>
              <li>NVP/SOAP</li>
              <li>Billing Agreements</li>
              { modifiers.web ? <li>checkout.js</li> : null }
            </ul>

          </div>
          <div className={styles.middleColumn}>
            <Route name='intro' default>
              <Intro />
            </Route>

            <Route name='quickstart'>
              <QuickStart />
            </Route>
          </div>
          <div className={styles.rightColumn}>
            <h4>Platform</h4>
            <ModifierGroup>
              <Modifier name='web' label='Web' default />
              <Modifier name='ios' label='iOS' />
              <Modifier name='android' label='Android' />
            </ModifierGroup>

            <h4>Integration</h4>
            <ModifierGroup>
              <Modifier name='sdk' label='SDK' default />
              <Modifier name='api' label='API' />
            </ModifierGroup>

            {
              modifiers.sdk ? <>
                <h4>API</h4>
                <ModifierGroup>
                  <Modifier name='client' label='Client' default />
                  <Modifier name='server' label='Server' />
                </ModifierGroup>
              </> : null
            }
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:insert-feedback-email@paypal.com">Send feedback to insert-feedback-email@paypal.com!</a>
      </footer>
    </div>
  )
}
