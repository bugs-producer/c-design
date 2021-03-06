import React from 'react'
import { Row, Col, Button, Form, Input, Upload, message, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const Release = props => {
    const [form] = Form.useForm()

    const courseOptions = [
        { label: '综合课程设计I', value: '1' },
        { label: '综合课程设计II', value: '2' },
        { label: '综合课程设计III', value: '3' }
    ]
    const gradeOptions = [
        { label: '不限', value: '不限' },
        { label: '大一', value: '大一' },
        { label: '大二', value: '大二' },
        { label: '大三', value: '大三' },
        { label: '大四', value: '大四' }
    ]

    const directionOptions = [
        { label: '不限', value: '不限' },
        { label: '系统与技术', value: '系统与技术' },
        { label: '数字动漫', value: '数字动漫' },
        { label: '网络安全', value: '网络安全' },
        { label: '数字信息处理', value: '数字信息处理' },
        { label: '嵌入式技术', value: '嵌入式技术' }
    ]
    const teacherOptions = [
        { label: '俯冲', value: '俯冲' },
        { label: '张翔', value: '张翔' },
        { label: '王伟的', value: '王伟的' }
    ]

    const tailLayout = {
        wrapperCol: { span: 8 }
    }
    const onFinish = values => {
        console.log(values)
    }
    const onReset = () => {
        form.resetFields()
    }

    const uploadConfig = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text'
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList)
            }
            if (info.file.status === 'done') {
                message.success(`文件上传成功`)
            } else if (info.file.status === 'error') {
                message.error(`文件上传失败`)
            }
        }
    }

    return (
        <>
            <div style={{ padding: 24, minHeight: 360, background: '#fff', margin: '24px' }}>
                <h2>课题信息</h2>
                <Form
                    form={form}
                    validateMessages={{
                        required: '${label}不能为空'
                    }}
                    preserve={false}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={48}>
                        <Col span={8}>
                            <Form.Item name="topic" label="课题名称" rules={[{ required: true }]}>
                                <Input placeholder="请输入课题名称" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="name" label="指导教师" rules={[{ required: true }]}>
                                <Select
                                    placeholder="请选择指导教师"
                                    allowClear
                                    options={teacherOptions}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={48}>
                        <Col span={8}>
                            <Form.Item name="course" label="课程名称" rules={[{ required: true }]}>
                                <Select
                                    placeholder="请选择所属课程"
                                    allowClear
                                    options={courseOptions}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="direction"
                                label="专业方向"
                                rules={[{ required: true }]}
                            >
                                <Select
                                    placeholder="请选择所属专业"
                                    allowClear
                                    options={directionOptions}
                                    mode="multiple"
                                    showArrow
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="grade" label="选课年级" rules={[{ required: true }]}>
                                <Select
                                    placeholder="请选择选课年级"
                                    allowClear
                                    options={gradeOptions}
                                    mode="multiple"
                                    showArrow
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="mession" label="主要任务">
                        <Input.TextArea
                            placeholder="请输入主要任务"
                            allowClear
                            autoSize={{ minRows: 5, maxRows: 10 }}
                        />
                    </Form.Item>
                    <Upload {...uploadConfig}>
                        <Button icon={<UploadOutlined />}>点击上传任务书</Button>
                    </Upload>
                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginRight: 24, marginTop: 24 }}
                        >
                            提交
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Release
