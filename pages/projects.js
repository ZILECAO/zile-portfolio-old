import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <section class="text-white ">

      {/* Main Body Element */}
      <div class="px-4 pt-12 pb-32 mx-auto max-w-screen-xl sm:px-6 lg:px-8">

        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-purple-700">
            Projects {"\n"}
          </h2>
        </div>

        <p class="mt-12 text-xl text-white font-bold">
          Personal Projects
        </p>


        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <a
            class="animate-pulse block p-8 backdrop-brightness-75 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://web3-tweet-generator.vercel.app/"
          >
            <svg class="h-8 w-8 text-teal-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 16v-4a4 4 0 0 1 8 0v4" />  <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />  <rect x="6" y="16" width="12" height="4" rx="1" /></svg>


            <h3 class="mt-4 text-xl font-bold text-white">Web3 Tweet Generator</h3>

            <p class="mt-1 text-sm text-gray-400">
              Built a web app that generates detailed Twitter threads about Web3 technologies using the OpenAI GPT-3 API

            </p>
          </a>


          <a
            class="block p-8 backdrop-brightness-75 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://www.metamanor.art/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-purple-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>


            <h3 class="mt-4 text-xl font-bold text-white">MetaManor NFTs</h3>

            <p class="mt-1 text-sm text-gray-400">
              Launched MetaManor NFT collection using the ERC-721 smart contract and built minting webpage with WebFlow.

            </p>
          </a>

          <a
            class="block p-8 backdrop-brightness-75 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://friendly-blini-65db18.netlify.app/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>


            <h3 class="mt-4 text-xl font-bold text-white">Arctic Penguins NFTs</h3>

            <p class="mt-1 text-sm text-gray-400">
              Generated 2222 unique pieces of artwork using the Hashlips Art Engine and deployed them to OpenSea;
              created a minting website using React and the Ethereum Hardhat development environment.

            </p>
          </a>
        </div>



        <p class="mt-12 text-xl text-white font-bold">
          Hackathons
        </p>


        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block p-8 backdrop-brightness-75 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://github.com/ZILECAO/easyA-hackathon"
          >
            <svg class="h-8 w-8 text-indigo-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="3" />  <line x1="3" y1="10" x2="21" y2="10" />  <line x1="7" y1="15" x2="7.01" y2="15" />  <line x1="11" y1="15" x2="13" y2="15" /></svg>


            <h3 class="mt-4 text-xl font-bold text-white">EasyA x Tron Hackathon at Harvard 2022</h3>

            <p class="mt-1 text-sm text-gray-400">
              4th place submission: built a payment-splitting dApp on the Tron blockchain network. Check out the demo and slide deck in the description of the Github! Won $8,000 in prizes

            </p>
          </a>

          <a
            class="block p-8 backdrop-brightness-75 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://github.com/ZILECAO/w3b-hackathon"
          >
            <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="7" />  <polyline points="12 10 12 13 14 13" />  <line x1="7" y1="4" x2="4.25" y2="6" />  <line x1="17" y1="4" x2="19.75" y2="6" /></svg>


            <h3 class="mt-4 text-xl font-bold text-white">Penn Web3 Builders Hackathon Fall 2022</h3>

            <p class="mt-1 text-sm text-gray-400">
              Built a hub for student note sharing utilizing IPFS for decentralized storage and smart contracts for token donation incentives

            </p>
          </a>

          <a
            class="block p-8 backdrop-brightness-75 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://gateway.pinata.cloud/ipfs/QmbyLk6E2YRWWgDtUGax5XahZgJ4g3DaSgtpypkkVU1zdu"
          >
            <svg class="h-8 w-8 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>

            <h3 class="mt-4 text-xl font-bold text-white">Baker Retail Center Metaverse Ideathon 2022</h3>

            <p class="mt-1 text-sm text-gray-400">
              Created a slide deck to pitch customer retention models for MCM luxury retail brand using blockchain-related solutions

            </p>
          </a>

        </div>


        <p class="mt-12 text-xl text-white font-bold">
          Blogs
        </p>



        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block p-8 border backdrop-brightness-75 border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://medium.com/bridxe/the-full-guide-on-how-to-develop-and-deploy-a-simple-escrow-marketplace-smart-contract-ab3e25919f75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>


            <h3 class="mt-4 text-xl font-bold text-white">The Full Guide on how to Develop and Deploy a Simple Escrow Marketplace Smart Contract</h3>

            <p class="mt-1 text-sm text-gray-400">
              Published a Web3 development guide on the BridXe Medium Publication, gaining 3,800+ impressions on Twitter and applaud from dev influencers

            </p>
          </a>

          <a
            class="block p-8 border backdrop-brightness-75 border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://medium.com/weavechain/how-web3-can-transform-personal-data-ownership-5df104194ea7"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>


            <h3 class="mt-4 text-xl font-bold text-white">How Web3 Can Transform Personal Data Ownership</h3>

            <p class="mt-1 text-sm text-gray-400">
              Published a blog post for the Weavechain publication on Medium; includes a webinar interview with Iain Henderson, Founder of DataYogi.
            </p>
          </a>


          <a
            class="block p-8 border backdrop-brightness-75 border-gray-800 shadow-xl transition rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            href="https://careerservices.upenn.edu/blog/2021/12/08/214596/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>


            <h3 class="mt-4 text-xl font-bold text-white">Exploring the Global Nature of Blockchain</h3>

            <p class="mt-1 text-sm text-gray-400">
              Authored a blog featuring my experiences interning remotely for NexChange Group, documenting what it&apos;s like to work for a company abroad during COVID-19.
            </p>
          </a>


        </div>



        






      </div>

    </section>

  )
}
