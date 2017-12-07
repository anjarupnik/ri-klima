import React, { PureComponent } from 'react'
import IconButton from 'material-ui/IconButton'
import Prev from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import Next from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

}

export const Decorators = [
  {
    component: class DecoratorLeft extends PureComponent {
      render() {
        return (
          <IconButton tooltip="Previous Slide"
            onClick={this.props.previousSlide}
            touch={true}
            iconStyle={styles.largeIcon}
          >
            <Prev color={'rgba(27, 104, 181, 0.2)'}/>
          </IconButton>
        )
      }
    },
    position: 'CenterLeft',
    style: {
      marginLeft: '2%'
    }
  },
  {
    component: class DecoratorRight extends PureComponent {
      render() {
        return (
          <IconButton tooltip="Next Slide"
            onClick={this.props.nextSlide}
            touch={true}
            iconStyle={styles.largeIcon}
          >
            <Next color={'rgba(27, 104, 181, 0.2)'}/>
          </IconButton>
        )
      }
    },
    position: 'CenterRight',
    style: {

      marginRight: '5%'
    }
  }
]
