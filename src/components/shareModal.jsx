import React from "react";
import { Button, Modal } from "react-bootstrap";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "../assets/styles/shareModal.css";

const ShareModal = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  console.log("shareID", props.shareID);
  const shareUrl = "https://www.youtube.com/channel/UCK6foRQRSRpnjZkbxbrXL5w";
  return (
    <div className="modalContainer">
      <Modal
        // backdrop="static"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="modalContainer">
          <h3>Bagikan Link</h3>
          <div className="m-3">
            <div>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                  }}
                >
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Copied!"
                  >
                    <Button className="button_blue" onClick={handleTooltipOpen}>
                      {shareUrl}
                    </Button>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </div>
            <div className="share_icon_container">
              <FacebookShareButton
                className="mx-2"
                url={shareUrl}
                quote="title or desciption"
                hashtag="#testshare"
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                className="mx-2"
                url={shareUrl}
                quote="title or desciption"
                hashtag="#testshare"
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
              <TelegramShareButton
                className="mx-2"
                url={shareUrl}
                quote="title or desciption"
                hashtag="#testshare"
              >
                <TelegramIcon size={40} round={true} />
              </TelegramShareButton>
              <WhatsappShareButton
                className="mx-2"
                url={shareUrl}
                quote="title or desciption"
                hashtag="#testshare"
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
          <Button className="button_orange" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShareModal;
