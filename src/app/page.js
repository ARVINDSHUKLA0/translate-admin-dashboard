import Link from 'next/link'
import styles from './page.module.css'

const stats = [
  {
    title: 'Total revenue (MTD)',
    value: '$86.4K',
    note: '↑ 9.2%',
    icon: '<i class="fa-solid fa-chart-simple"></i>',
    type: 'success',
    color: "green"

  },
  {
    title: 'Active users',
    value: '3,910',
    note: '↑ 214 new',
    icon: '<i class="fa-solid fa-users"></i>',
    type: 'primary',
    color: "green"
  },
  {
    title: 'Jobs in progress',
    value: '642',
    note: 'across 42 languages',
    icon: '<i class="fa-solid fa-folder"></i>',
    type: 'warning',
  },
  {
    title: 'Open disputes',
    value: '7',
    note: '↓ 3 vs last week',
    icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
    type: 'danger',
    color: "red"
  },
]

const revenue = [
  { month: 'Mar', value: 50 },
  { month: 'Apr', value: 65 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 70 },
  { month: 'Jul', value: 95 },
  { month: 'Aug', value: 120 },
]

const verification = [
  {
    name: 'Jonas Richter',
    code: 'JR',
    language: 'EN ⇄ DE',
    text: 'Certificate uploaded',
  },
  {
    name: 'Sara Kim',
    code: 'SK',
    language: 'EN ⇄ KO',
    text: 'Certificate uploaded',
  },
]

const users = [
  {
    name: 'Elena Vidal',
    email: 'elena.vidal@mail.com',
    initials: 'EV',
    role: 'Translator',
    status: 'ACTIVE',
    jobs: '340',
    rating: '4.9★',
  },
  {
    name: 'Noah Carter',
    email: 'noah@northwindlegal.com',
    initials: 'NC',
    role: 'Client',
    status: 'ACTIVE',
    jobs: '18',
    rating: '—',
  },
  {
    name: 'Jonas Richter',
    email: 'jonas.r@mail.com',
    initials: 'JR',
    role: 'Translator',
    status: 'PENDING VERIFICATION',
    jobs: '0',
    rating: '—',
  },
  {
    name: 'Rafael Santos',
    email: 'r.santos@mail.com',
    initials: 'RS',
    role: 'Translator',
    status: 'SUSPENDED',
    jobs: '210',
    rating: '4.1★',
  },
]

const disputes = [
  {
    text: 'Refund requested — Atlas Robotics vs. R. Santos',
    time: '3 hours ago',
  },
  {
    text: 'Quality flag — "User Manual DE" translation',
    time: 'Yesterday',
  },
  {
    text: 'Late delivery dispute — Fenwick Capital',
    time: '2 days ago',
  },
]

export default function Home() {

  return (
    <div>
      <div className="row g-3 mb-4">
        {stats.map((item) => (
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3"
            key={item.title}
          >
            <div className="card h-100 border rounded-3 shadow-sm">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <small className="text-secondary">
                    {item.title}
                  </small>
                  <span
                    className={`${styles.icon} ${styles[item.type]}`}
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                </div>
                <div className="fs-3 fw-semibold mt-2">
                  {item.value}
                </div>
                <small className={`fs-12 fw-bold ${styles[item.color]}`}>
                  {item.note}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
          <div className="card h-100 border rounded-3 shadow-sm">
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">
                  Revenue — last 6 months
                </h5>
                <small className={`${styles.green} fw-bold fs-13 custom-bg-light-green px-2 py-1 rounded-4`}>
                  ↑ 9.2% MOM
                </small>
              </div>
              <div className={styles.chart}>
                {revenue.map((item, index) => (
                  <div
                    className={styles.barItem}
                    key={item.month}
                  >
                    <div
                      className={
                        index === revenue.length - 1
                          ? `${styles.bar} ${styles.lastBar}`
                          : styles.bar
                      }
                      style={{
                        height: `${item.value}px`,
                      }}
                    />

                    <small className='fs-13 text-secondary'>
                      {item.month}
                    </small>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="col-12 col-lg-4">
          <div className="card border rounded-3 shadow-sm">
            <div className="card-body p-3">
              <h6 className="fw-bold mb-2">
                Verification queue
              </h6>
              {verification.map((item) => (
                <div
                  className={`${styles.queueItem} d-flex align-items-center justify-content-between`}
                  key={item.name}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className={styles.queueAvatar}>
                      {item.code}
                    </span>
                    <div>
                      <div className="fw-semibold small">
                        {item.name}
                      </div>
                      <small className="text-secondary">
                        {item.language} · {item.text}
                      </small>
                    </div>
                  </div>
                  <Link href="/verification-queue">
                    <button className="btn btn-primary btn-sm">
                      Review
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
          <div className="card border rounded-3 shadow-sm">
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">
                  Recent users
                </h6>
                <Link href="/users">
                  <button className="btn btn-link btn-sm text-primary text-decoration-none">
                    Manage all →
                  </button>
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table table-sm align-middle mb-0">
                  <thead>
                    <tr>
                      <th className='fs-12 text-secondary'>USER</th>
                      <th className='fs-12 text-secondary'>ROLE</th>
                      <th className='fs-12 text-secondary'>STATUS</th>
                      <th className='fs-12 text-secondary'>JOBS</th>
                      <th className='fs-12 text-secondary'>RATING</th>
                      <th className='fs-12 text-secondary'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (

                      <tr key={user.email}>
                        <td className='fs-14 py-2'>
                          <div className="d-flex align-items-center gap-2">
                            <span className={styles.userAvatar}>
                              {user.initials}
                            </span>
                            <div>
                              <div className="fw-semibold small fs-12">
                                {user.name}
                              </div>
                              <small className="text-secondary fs-12">
                                {user.email}
                              </small>
                            </div>
                          </div>
                        </td>

                        <td className="small fs-12 ">
                          {user.role}
                        </td>

                        <td>

                          <span
                            className={`${styles.status} ${user.status === 'ACTIVE'
                              ? styles.active
                              : user.status === 'SUSPENDED'
                                ? styles.suspended
                                : styles.pending
                              } px-3 py-1 fs-10`}
                          >
                            {user.status}
                          </span>

                        </td>

                        <td className="small fs-12">
                          {user.jobs}
                        </td>

                        <td className="small fs-12">
                          {user.rating}
                        </td>

                        <td>
                          <button className="btn btn-sm">
                            →
                          </button>
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>


        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <div className="d-flex flex-column gap-3">
            <div className="card border rounded-3 shadow-sm">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold mb-0">
                    Open disputes
                  </h6>
                  <Link href="/disputes-support">
                  <button className="btn btn-link btn-sm text-primary text-decoration-none">
                    View all →
                  </button>
                  </Link>
                </div>

                {disputes.map((item) => (
                  <div
                    className={styles.dispute}
                    key={item.text}
                  >
                    <div className="d-flex gap-2">
                      <span className={styles.dot} />
                      <div>
                        <div className="small text-dark fs-14">
                          {item.text}
                        </div>
                        <small className="text-secondary fs-14">
                          {item.time}
                        </small>
                      </div>
                    </div>
                  </div>

                ))}

              </div>
            </div>

            <div className="card border rounded-3 shadow-sm">
              <div className="card-body p-3">
                <h6 className="fw-bold mb-1">
                  Pending payouts
                </h6>
                <div className="fs-4 py-2">
                  $18,240
                </div>
                <small className="text-secondary">
                  42 translators awaiting payout this cycle
                </small>
                <Link href="/payments-payouts">
                  <button className={`btn w-100 mt-2 fw-bold ${styles.hoverBtn}`}>
                    Approve all payouts
                  </button>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}