'use client'

import Link from 'next/link'
import { FaCheck, FaTimes, FaCircle } from 'react-icons/fa'
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="my-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose a plan that best suits your needs. We have a range of options to cater to different requirements.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-primary/40 xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-primary">Free</h3>
                <p className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                  Active
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">Perfect for getting started and exploring our features.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$0</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  Basic features
                </li>
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  Up to 1,000 subscribers
                </li>
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  Basic analytics
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="inline-flex items-center justify-center w-full px-4 py-2 font-semibold text-primary bg-primary/15 rounded-md">
                <FaCircle className="w-3 h-3 mr-2 text-green-500" />
                Active
              </p>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-primary/40 xl:p-10">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Plus</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">Ideal for growing businesses with more advanced needs.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$29</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  All Free features
                </li>
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  Up to 10,000 subscribers
                </li>
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  Advanced analytics
                </li>
              </ul>
            </div>
            <Link href="/signup?plan=plus" passHref>
              <Button className="mt-8 w-full">Get started</Button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-primary/40 xl:p-10">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Premium</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">For large-scale operations and enterprise-level support.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$99</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  All Plus features
                </li>
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  Unlimited subscribers
                </li>
                <li className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  24/7 premium support
                </li>
              </ul>
            </div>
            <Link href="/signup?plan=premium" passHref>
              <Button className="mt-8 w-full">Get started</Button>
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-24 overflow-hidden">
          <h2 className="text-2xl font-bold mb-8 text-center">Plan Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Feature</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Free</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Plus</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Subscribers</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Up to 1,000</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Up to 10,000</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Analytics</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Basic</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Advanced</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Custom Branding</td>
                  <td className="px-3 py-4 text-sm text-gray-500"><FaTimes className="h-5 w-5 text-gray-400" aria-hidden="true" /></td>
                  <td className="px-3 py-4 text-sm text-gray-500"><FaCheck className="h-5 w-5 text-primary" aria-hidden="true" /></td>
                  <td className="px-3 py-4 text-sm text-gray-500"><FaCheck className="h-5 w-5 text-primary" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">API Access</td>
                  <td className="px-3 py-4 text-sm text-gray-500"><FaTimes className="h-5 w-5 text-gray-400" aria-hidden="true" /></td>
                  <td className="px-3 py-4 text-sm text-gray-500"><FaCheck className="h-5 w-5 text-primary" aria-hidden="true" /></td>
                  <td className="px-3 py-4 text-sm text-gray-500"><FaCheck className="h-5 w-5 text-primary" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Support</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Community</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Email</td>
                  <td className="px-3 py-4 text-sm text-gray-500">24/7 Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}