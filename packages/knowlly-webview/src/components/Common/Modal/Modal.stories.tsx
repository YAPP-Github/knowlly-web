import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';
import { Button, Modal } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';

export default {
  component: Modal,
  title: 'Common/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>('modal open', false);

  const handleShowModalClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <PageLayout>
      <Button _onClick={handleShowModalClick}>open</Button>
      {isModalOpen && (
        <Modal {...args} _onClose={handleShowModalClick}>
          <p>{`open ${args.buttonType} modal`}</p>
        </Modal>
      )}
    </PageLayout>
  );
};

export const Confirm = Template.bind({});
Confirm.args = {
  buttonType: 'confirm',
};

export const Custom = Template.bind({});
Custom.args = {
  buttonType: 'custom',
};
