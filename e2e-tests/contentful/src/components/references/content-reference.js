import React from "react"

export const ContentfulContentReference = ({ one, many, title }) => {
  const references = [one, ...(many || [])].filter(Boolean)
  return (
    <p data-cy-id="reference">
      [ContentfulReference] {title}: [
      {references.map(ref => ref.title).join(", ")}]
    </p>
  )
}