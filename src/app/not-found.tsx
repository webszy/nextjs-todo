"use client";
import {Roboto} from 'next/font/google'
import '../styles/not-found.css'
import {Search} from '@mui/icons-material'
import Link from 'next/link'
import {useEffect} from "react";

const robot = Roboto({
    weight: ['400', '300', '700', '900'],
    display: 'swap',
    subsets: ['latin']
})
export default function NotFound() {
    useEffect(load)
    return (
        <div className={`${robot.className} page404 w-screen h-screen`}>
            <div className="page">
                <header>
                    {/*<nav></nav>*/}
                    <div className="search">
                        <Search/>
                    </div>
                </header>
                <div className="content">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <p>I tried to catch some fog, but i mist</p>
                    <Link href='/'>back to home</Link>
                </div>
                <img alt='not found' src="/bg404.jpeg" />
            </div>
        </div>
    )
}

function load() {
    let lFollowX = 0
    let lFollowY = 0
    let x = 0
    let y = 0
    let friction = 1 / 30
    const page = document.querySelector('.page404') as HTMLElement
    function animate() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        page.style.setProperty('--translate', `translate(${x}px, ${y}px) scale(1.1)`)
        window.requestAnimationFrame(animate);
    }
    function getPosition(e){
        const width = window.innerWidth
        const height = window.innerHeight
        const lMouseX = Math.max(-100, Math.min(100, e.clientX - width / 2))
        const lMouseY = Math.max(-100, Math.min(100, e.clientY - height / 2))
        lFollowX = (10 * lMouseX) / 100
        lFollowY = (10 * lMouseY) / 100
    }
    page.addEventListener('mousemove', getPosition)
    page.addEventListener('click', getPosition)
    animate()
}
