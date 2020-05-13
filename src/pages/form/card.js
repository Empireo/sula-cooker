import React from 'react';
import CreateForm from '@/components/jsonFormTemp';
import { useIntl } from 'umi';

export default props => {
  const inti = useIntl();

  const config = {
    actionsPosition: 'bottom',
    container: {
      type: 'div',
      props: {
        style: {
          maxWidth: 1920,
          margin: '0 auto 72px',
        },
      },
    },
    itemLayout: {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 8,
      },
    },
    fields: [
      {
        name: 'sender',
        container: {
          type: 'card',
          props: {
            title: inti.formatMessage({ id: 'form_title_sender' }),
            style: {
              padding: 0,
              marginBottom: 16,
            },
          },
        },
        fields: [
          {
            name: 'senderName',
            label: inti.formatMessage({ id: 'form_label_sender_name' }),
            field: {
              type: 'input',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_placeholder_sender_name',
                }),
              },
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
          {
            name: 'secrecy',
            label: inti.formatMessage({ id: 'form_label_sender_secrecy' }),
            field: {
              type: 'switch',
              props: {
                checkedChildren: 'on',
                unCheckedChildren: 'off',
              },
            },
            valuePropName: 'checked',
          },
          {
            name: 'senderNumber',
            label: inti.formatMessage({ id: 'form_label_sender_number' }),
            field: {
              type: 'inputnumber',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_placeholder_sender_number',
                }),
                style: {
                  width: '80%',
                },
              },
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
          {
            name: 'senderAddress',
            label: inti.formatMessage({ id: 'form_label_sender_address' }),
            field: {
              type: 'textarea',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_label_sender_address',
                }),
              },
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
        ],
      },
      {
        name: 'recipient',
        container: {
          type: 'card',
          props: {
            title: inti.formatMessage({ id: 'form_title_recipient' }),
            style: {
              padding: 0,
              marginBottom: 16,
            },
          },
        },
        fields: [
          {
            name: 'recipientName',
            label: inti.formatMessage({ id: 'form_label_recipient_name' }),
            field: {
              type: 'select',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_placeholder_recipient_name',
                }),
              },
            },
            remoteSource: {
              url: '/api/manage/recipientList.json',
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
          {
            name: 'recipientTime',
            label: inti.formatMessage({ id: 'form_label_recipient_time' }),
            field: {
              type: 'checkboxgroup',
            },
            initialSource: [
              { text: 'Morning', value: 'morning' },
              { text: 'Afternoon', value: 'afternoon' },
              { text: 'Night', value: 'night' },
            ],
          },
          {
            name: 'recipientNumber',
            label: inti.formatMessage({ id: 'form_label_recipient_number' }),
            field: {
              type: 'inputnumber',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_placeholder_recipient_number',
                }),
                style: {
                  width: '80%',
                },
              },
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
          {
            name: 'recipientAddress',
            label: inti.formatMessage({ id: 'form_label_recipient_address' }),
            field: {
              type: 'textarea',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_placeholder_recipient_address',
                }),
              },
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
        ],
      },
      {
        name: 'basic',
        container: {
          type: 'card',
          props: {
            title: inti.formatMessage({ id: 'form_title_basic' }),
            style: {
              padding: 0,
              marginBottom: 16,
            },
          },
        },
        fields: [
          {
            name: 'time',
            label: inti.formatMessage({ id: 'form_label_delivery_time' }),
            field: {
              type: 'rangepicker',
              props: {
                placeholder: [
                  inti.formatMessage({ id: 'form_placeholder_start_time' }),
                  inti.formatMessage({ id: 'form_placeholder_end_time' }),
                ],
              },
            },
            rules: [
              {
                required: true,
                message: inti.formatMessage({ id: 'form_validator_input' }),
              },
            ],
          },
          {
            name: 'priceProject',
            label: inti.formatMessage({ id: 'form_label_price_protection' }),
            field: {
              type: 'slider',
              props: {
                min: 0,
                max: 1000,
                step: 100,
                dots: true,
              },
            },
            remoteSource: {
              url: '/api/manage/priceList.json',
            },
          },
          {
            name: 'description',
            label: inti.formatMessage({ id: 'form_label_basic_description' }),
            field: {
              type: 'textarea',
              props: {
                placeholder: inti.formatMessage({
                  id: 'form_placeholder_basic_description',
                }),
              },
            },
          },
        ],
      },
    ],
    submit: {
      url: '/api/manage/add.json',
      method: 'post',
    },
    remoteValues: {
      url: '/api/manage/detail.json',
      method: 'post',
    },
  };

  return <CreateForm {...config} {...props} />;
};