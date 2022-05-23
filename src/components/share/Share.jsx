import "./Share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
        <div className="share__wrapper">
            <div className="share__top">
                <img className="share__profilePicture" src="/assets/person/1.jpeg" alt="" />
                <input placeholder="Whats in your mind?" className="share__input" />
            </div>
            <hr className="share__hr " />
            <div className="share__bottom">
                <div className="share__optionCOntainer">
                    <div className="share__option">
                        <PermMedia htmlColor="tomato" className="share__icon" />
                        <span className="share__optionText">Photo or Video</span>
                    </div>
                    <div className="share__option">
                        <Label htmlColor="blue" className="share__icon" />
                        <span className="share__optionText">Tag</span>
                    </div>
                    <div className="share__option">
                        <Room htmlColor="green" className="share__icon" />
                        <span className="share__optionText">Location</span>
                    </div>
                    <div className="share__option">
                        <EmojiEmotions htmlColor="goldenrod" className="share__icon" />
                        <span className="share__optionText">Feelings</span>
                    </div>
                </div>
                <button className="share__button">Share</button>
            </div>
        </div>
    </div>

  )
}
