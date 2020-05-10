/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import config from "../../../config"

export const ContentButton = ({ button, buy, ...props }) => {
  const { title, target, url } = button
  const buttonUrl = button && url.replace(config.wordPressUrl, "")
  return (
    <Flex {...props}>
      {buy ? (
        <Button
          className="snipcart-add-item"
          data-item-id="bundle"
          data-item-price="199"
          data-item-url="https://new-theme-snipcart.netlify.app"
          data-item-name="All Themes"
          data-item-payment-interval="Year"
          data-item-payment-interval-count="1"
          sx={{ fontWeight: 600 }}
        >
          Buy the themes bundle!
        </Button>
      ) : (
        <>
          {target === "_blank" ? (
            <a href={url} target="_blank">
              <Button>{title}</Button>
            </a>
          ) : url.startsWith("#") ? (
            <AnchorLink href={url} offset={25}>
              <Button>{title}</Button>
            </AnchorLink>
          ) : (
            <Button>
              <Link to={buttonUrl}>{title}</Link>
            </Button>
          )}
        </>
      )}
    </Flex>
  )
}

export default ContentButton
