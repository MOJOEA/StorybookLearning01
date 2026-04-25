# StorybookLearning01
Storybook + Component Specification

# Storybook & Component Specification Guide
โปรเจกต์นี้ใช้ Storybook เป็นเครื่องมือในการพัฒนา UI Components แบบแยกส่วน (Isolated Development) และใช้สำหรับทำ Component Specification เพื่อกำหนดคุณลักษณะและพฤติกรรมของแต่ละ Component ให้เป็นมาตรฐานเดียวกัน

# 1. Modal Component
Component สำหรับแสดงหน้าต่างป๊อปอัปที่มีความยืดหยุ่นสูง
Features & Specs:
Visibility Control: ต้องมีตัวแปร (Prop) สำหรับควบคุมการแสดงผล (เช่น isOpen) เพื่อกำหนดว่าจะโชว์หรือซ่อน Modal
Flexible Content: รองรับการใส่เนื้อหาแบบ HTML หรือ Component อื่นๆ เข้าไปข้างในได้ (General Purpose) ผ่าน children
OnClose Callback: รองรับการส่ง Function เข้าไปเพื่อทำงานเมื่อมีการปิด Modal (เช่น การ Reset ค่าในฟอร์ม หรือการล้างข้อมูลชั่วคราว)

# 2. Carousel Component
Component สำหรับแสดงรูปภาพแบบเลื่อนได้ (Image Slider)
Features & Specs:
Multi-image Support: รองรับการรับค่า Array ของรูปภาพ (Image URLs) ได้หลายภาพ
Navigation Control: มีระบบควบคุมการเลื่อนภาพไปข้างหน้า (Next) และย้อนกลับ (Previous)
Autoplay Mode:
สามารถเปิด/ปิดระบบเลื่อนภาพอัตโนมัติได้
กำหนดความเร็วในการเลื่อน (Interval) เป็นหน่วยมิลลิวินาที (Milliseconds) ได้
Custom Start Index: สามารถกำหนดได้ว่าต้องการให้ Carousel เริ่มต้นแสดงผลที่รูปภาพลำดับที่เท่าไหร่

# 3. Register Form Component
Component สำหรับจัดการการลงทะเบียนของผู้ใช้งาน
Features & Specs:
Input Fields: ประกอบด้วย 3 ช่องกรอกข้อมูลหลัก:
name (ชื่อ-นามสกุล)
email (อีเมล)
phoneNumber (เบอร์โทรศัพท์)
Validation Logic:
Email: ตรวจสอบรูปแบบอีเมลให้ถูกต้องตามมาตรฐาน (Email Format)
Phone Number: ตรวจสอบรูปแบบเบอร์โทรศัพท์ (เช่น ต้องเป็นตัวเลข 10 หลัก)
Error Messaging: แสดงข้อความแจ้งเตือนทันทีหากผู้ใช้กรอกข้อมูลไม่ถูกต้อง
API Integration: เมื่อข้อมูลผ่านการตรวจสอบ (Validate) ทั้งหมด และมีการกดปุ่ม Submit ระบบจะนำข้อมูลทั้ง 3 ฟิลด์ส่งผ่าน API เพื่อบันทึกลงฐานข้อมูลต่อไป
