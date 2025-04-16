"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

const TypingEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isPaused) return

        if (!isDeleting) {
          // Typing
          const fullText = texts[currentTextIndex]
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1))
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, delayBetweenTexts)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect

